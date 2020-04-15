function Emitter(){
  this.events = {      
  }   
}


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