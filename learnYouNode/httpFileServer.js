const http = require('http');

const fs = require('fs');

let path = process.argv[2];

let server  = http.createServer((req,res) => {

    res.writeHead(200,{'content-type' : 'text/plain'});
    let src = fs.createReadStream(process.argv[3]);

    console.log(src.pipe(res));
});

server.listen(path);