var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {'content-Type': 'text/plain'})
  fs.createReadStream(__dirname+'/index.html','utf8').pipe(res)
}).listen(1227);


/*How does the above program help 

The above program helps us to diveid ethe entire data from a file index.html and get the data in chunks fill the buffer and then pipe the response 
By doing this we can prevent readFileSync so other users need not wait, no problem with the memory consumption issues as the data is divided into chunks and then served


Outputting the Json being strinified on the web browser can be did by using JSON.stringify(jsondata)
*/


