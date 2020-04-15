function Emitter(){
  this.events = {      
  }   
}

/*
On the Prototype chain the methods are being added so what ever the objects
that are being created from the "Emitter function" they will be created with the properties as defined below
*/

Emitter.prototype.on = function(type, data){
  this.events[type] = this.events[type] || []
  //{click: [fn1,fn2]}
  //here data is nothing but the function
  this.events[type].push(data);
}

Emitter.prototype.emit = function(type){
   this.events[type].forEach((item)=>{
     item();
   })  
}

module.exports = Emitter;