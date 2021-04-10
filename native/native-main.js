const http = require('http');
const url = require('url');

const app = http.createServer(function(request, response){
    response.writeHead(200); // OK
    response.end('hello NodeJs!');
}).listen(3000);

/*
curl -X GET "127.0.0.1:3000"
- result -
hello NodeJs!
*/