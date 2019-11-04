var http = require('http');
var fa = require('fs');

function send404Response(response) {
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.end("Not found");
}

var app = http.createServer(function(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type":"text/html"});
        fa.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
});

app.listen(3000);
console.log("Server On");