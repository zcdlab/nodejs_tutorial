// https://www.youtube.com/watch?v=tiMLxUKrB-g&index=6&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR

var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8000);
