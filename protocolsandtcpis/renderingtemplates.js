var http = require('http');
var fs = require('fs');
var data2 = fs.readFileSync(__dirname + '/index.html', 'utf8');
http.createServer(function(req,res){
  //this is the callback function since this is being passed to another function
  //to execute after some time .
  res.writeHead(200, {'Content-Type': 'text/html'});
  data2.replace('{{custom Message}}','Hare Rama Hare Rama RAma RAma HAre Hare');
  res.end(data2);
  console.log(data2);
}).listen(1227, '127.0.0.1')
//node converts the javascript code to machine code with the help of the V8 engine in it.