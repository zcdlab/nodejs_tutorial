// https://www.youtube.com/watch?v=JH4qVqplC8E&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&index=2

var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text-plain"});
    response.write("It worksssssss!");
    response.end();
}

http.createServer(onRequest).listen(8000);