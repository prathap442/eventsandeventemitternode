var fs = require('fs');
var data = fs.readFileSync(__dirname + '/loremipsum.txt','utf8');
//reading file synchronously doesnot follow the asynchronous node way instead makes the system to wait for it .
console.log(data);
var data2 = "";
//the callback function if we loook below has got err as the first argument and the data as the second argument 
//this gives the real meaning of the error first callbacks
fs.readFile(__dirname+'/loremipsum.txt',function(err,data){
  data2 = data;
});
console.log(data2);
fs.writeFile(__dirname+'/loremipsumcopy.txt', data2, function(err,data){
   console.log(data);  
});

/*

What are the Error First Callbacks
- The functions that have errors as their first argument are called error first callbacks .

*/