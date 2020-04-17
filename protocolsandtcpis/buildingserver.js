// Let us try to build the node server now .
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('Hello World'); 
}).listen(1227,'127.0.0.1')