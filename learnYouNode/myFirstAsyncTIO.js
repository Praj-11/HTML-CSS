const fs = require("fs");

let count = 0;

fs.readFile(process.argv[2] , (err,data) => {
    let str = data.toString();

    count = str.split('\n').length - 1;

    console.log(count);
});
