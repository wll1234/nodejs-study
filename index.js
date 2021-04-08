var http = require('http');

var app = http.createServer(function(request, response){
    var _url = request.url;
    console.log(_url);
    
});