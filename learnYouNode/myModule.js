const fs = require('fs');
const ph = require('path');

module.exports = (path, ext, callback)=>{

    fs.readdir(path,(err, str) => {

        if (err)
            return callback(err);

        str = str.filter(function (file) {

            if (ph.extname(file) === '.' + ext){

                return true;
            }
        });


        callback(null, str);
    })

};