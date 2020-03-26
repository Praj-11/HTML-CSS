const fs = require("fs");
const ph = require("path");
let path = process.argv;

fs.readdir(path[2] ,"utf-8", (err,data) =>{

    let ext = path[3];
    let val;
    let index;
    for (let i = 0; i < data.length ; i++) {


        if(ph.extname(data[i]).slice(1,ph.extname(data[i]).length) == ext){
            console.log(data[i]);
        }
    }
} );