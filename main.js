const http = require('http');
const url = require('url');

const app = http.createServer(function(request, response){
    http.IncomingMessage
    let _url = request.url;
    let queryData = new URLSearchParams(url.search);

    if(_url == '/'){
        _url = '/index.html';
    } else if(_url == '/fabicon.ico'){
        return response.writeHead(404);
    }
    queryData = url.URLSearchParams;
    
    console.log(queryData.toString());
    // queryData.forEach((val,key) => {
    //     console.log(_url+key+val);
    // });

    response.writeHead(200); // OK
    response.end(_url);
}).listen(3000);