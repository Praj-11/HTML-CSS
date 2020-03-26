const fs = require('fs');

let path = process.argv[2];

let file = fs.readFileSync(path);

let str = file.toString();

let count = str.split('\n').length - 1;

console.log(count);