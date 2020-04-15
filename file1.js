var EventEmitter = require('events');
var util = require('util');
function Greeter(){
  this.greet = function(){
    console.log("yeah allah");
  }
}
var greeter = new Greeter();//this creates a new object of the Greeter functino
//util is passed with 2 arguments one inheritedaModule, iheritanceModule

//The concept of the Inheritance to the event emitter from the Greeter
util.inherits(Greeter, EventEmitter);
//Now Greeter will have access to all the EventEmitter methods as well as the methods of the Greeter



//By prototypal iheritance all the Greeter objects have the methods and the properties of the EventEmtitter;
var greeter = new Greeter();
greeter.on('saveFile',()=>{
  console.log("executing the saving of the file");   
})

greeter.emit('saveFile')
