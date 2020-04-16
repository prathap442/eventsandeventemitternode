var util = require('util');
function Person(){
  Greetr.call(this)
  this.firstname = "mohan"
  this.lastname = "prathap"
}

function Greetr(){
  this.unjala = "unjala ugreeveala"  
}

Greetr.prototype.angelina = function(){
  console.log("Hollyworld");  
}

util.inherits(Person,Greetr);
//iherits by utils does the job of only inherting the prototype properties of the Greetr to the Person

var p1 = new Person()
console.log(p1);
console.log(p1.angelina())