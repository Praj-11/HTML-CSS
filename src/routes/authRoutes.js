const express = require('express');
const {MongoClient} = require('mongodb');
const debug = require('debug')('app:authRoutes');
const passport = require('passport');

const authRouter = express.Router();

function router() {

    authRouter.route('/signUp')
        .post((req, res) => {
            const {firstName, lastName, password, email, birthday, gender} = req.body;
            const url = 'mongodb://localhost:27017';
            const dbName = 'facebookClone';

            (async function addUser() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug('Connected Correctly to server');

                    const db = client.db(dbName);

                    const col = db.collection('users');
                    const user = {firstName, lastName, password, email, birthday, gender};

                    const check =await col.findOne({email: email})

                    if (check) {
                        res.redirect('/');
                        debug('Error: Email Exist');
                    } else {

                        const result = await col.insertOne(user);

                        req.login(result.ops[0], () => {
                            res.redirect('/auth/profile');
                        });
                    }
                }catch (e) {
                    debug(e);
                }

                client.close();
            }());
        });

    authRouter.route('signIn')
        .get((req,res) => {

            debug('SignIn Successful');
        })
        .post(passport.authenticate('local',{

            successRedirect:'/auth/profile',
            failureRedirect: '/'
        }));

    authRouter.route('/profile')
        .all((req,res,next) => {
            if (req.user){
                next();
            }else {
                res.redirect('/');
            }
        })
        .get((req,res) =>{
            res.json(req.user);
        });

    return authRouter;
}

module.exports = router;