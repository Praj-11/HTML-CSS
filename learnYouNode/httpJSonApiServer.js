const http = require('http');

let url = require('url');

let parseTime = (time) => {

    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second:time.getSeconds()
    }
};

function unixTime (time) {
    return {
        unixtime: time.getTime()
    }
}

let parseQuery = (url) =>{

    switch (url.pathname) {
        case '/api/parsetime': return parseTime(new Date(url.query.iso));

        case '/api/unixtime': return unixTime(new Date(url.query.iso));

        default: return 'please enter a valid endpoint url'
    }
};

let server = http.createServer(function (request,response) {

    if (request.method === 'GET') {

        response.writeHead(200, {'Content-Type': 'application/json'});
        url = url.parse(request.url, true)
        response.end(JSON.stringify(parseQuery(url)))
    }

    response.writeHead(405);
    response.end();

});

server.listen(+process.argv[2], function () {

    console.log("Server listening on http://localhost:%s" , process.argv[2])
});