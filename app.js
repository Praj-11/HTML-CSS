const  express = require('express');
const  debug = require('debug')('app');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const  cookieParser = require('cookie-parser');
const  session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:'clone'}));

require('./src/Config/passport')(app);

app.use('/css',express.static('./public/css/'))
app.set('views','./src/views')
app.set('view engine','ejs')

const authRouter = require('./src/routes/authRoutes')();

app.use('/auth',authRouter);

app.get('/',(req,res) => {
    res.render('index');
})

app.listen(port,() =>{

    debug(`listening on port ${port}`);
})