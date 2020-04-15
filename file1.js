var Emitter = require('events');
var util = require('util');
var emtr = new Emitter();//this creates a new object of the Emitter functino

//now we want to add the event listeners on the emtr we can do that 
emtr.on('click',function(){
  console.log("emitter click 1");   
})

emtr.on('fileSave',function(){
  console.log("emitter file saved");
});

emtr.emit('click');