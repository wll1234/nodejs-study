var http = require('http');

var app = http.createServer(function(request, response){
    var _url = request.url;
    console.log(_url);

    if(_url == '/'){
        _url = '/index.html';
    }

    response.writeHead(200); // OK
    response.end(_url);
}).listen(3000);