'use strict';

const http = require('http');

const map = require('through2-map');

let path = process.argv[2];

let server  = http.createServer((req,res) => {

    if (req.method !== 'POST'){

        return res.end('send me a POST\n');
    }

    res.pipe(map(function (chunk) {

        return chunk.toString().toUpperCase();
    })).pipe(res);

    // console.log(res);
});

server.listen(Number(path));