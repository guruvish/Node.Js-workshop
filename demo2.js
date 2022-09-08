var http = require('http');
var a=10;
var b=20;
var c =a+b;
var msg="sum  is" + c;
if(c==30) 
{
    msg += "<br> c is 30 ";
} 
else{
    msg += "c is not 30"
}
http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});
res.end(msg);
}).listen(3000);
console.log("server is listening on http://127.0.0.1:3000");