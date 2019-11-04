var connect = require('connect');
var http = require('http');

var app = connect();

function about(request, response) {
    console.log('about');
}

function email(request, response) {
    console.log('email');
}

app.use('/about', about);
app.use('/email', email);

http.createServer(app).listen(3000);
console.log('Server On');