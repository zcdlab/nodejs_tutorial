// https://www.youtube.com/watch?v=NemVc0_pnzM&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&index=3 

var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2')

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text-plain"});
    response.write("It worksssssss!\n");
    module1.myFunc();
    module2.myFunc();
    response.write(module1.myStr + '\n')
    response.write(module2.myStr + '\n')
    response.end();
}

http.createServer(onRequest).listen(8000);