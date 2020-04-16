class Person{
  //the initializatino function under the hood it used to initialize the objects of the Person class
  //with the firstanme being hare 
  //with the lastname being krishna
  //with the middlename being rama
  constructor(){
    this.firstname = "hare"
    this.lastname = "krishna"
    this.middlename = "rama"
  }
   
  //all the methods that are being added here come under the prototype chain
  //methods that get attached to the prototype chain
  greet(){
    console.log("This is the greeting");
  }
}


//  The above written code inturn gets converted to the 
/*
function Person(){
  this.firstname = "hare"
  this.middlename = "rama"
  this.lastname = "krishna" 
}

Person.prototype.greet = function(){
  console.log("This is the greeting");
}


var p1 = new Person();
p1.greet();
var p2 = new Person();
p2.greet();
//here the thing is that the prototype of the p1 object is equal to the prototype of the p2 object
console.log(p1.__proto__ == p2.__proto__);
//the two prototypes of the two objects being created are tending to be equal
*/