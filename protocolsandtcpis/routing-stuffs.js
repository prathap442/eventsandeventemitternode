var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  if(req.url == "/"){
    res.writeHead(200,{'content-Type': "application/json"});
    res.end(JSON.stringify({"name": "hare krishna","religion": "all"}));   
  }
  else if(req.url == "/dosomethings"){
    res.writeHead(200,{'content-Type': "application/json"});
    res.end(JSON.stringify({"name": "hare krishna", "religin": "cant explain"}))  
  }
  else{
    res.writeHead(400, {'content-Type': 'text/plain'})
    res.end('Not found');  
  }
}).listen(1227,'127.0.0.1')