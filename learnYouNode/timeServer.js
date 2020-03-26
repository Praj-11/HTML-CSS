const net = require('net');

let path = process.argv[2];

const server = net.createServer(function (socket) {

    let date = new Date();

    let str = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
});

server.listen(path);