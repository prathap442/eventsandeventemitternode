class Person{
  constructor(){
    this.firstname = "haer"
    this.lastname = "krishna"  
  }

  grook(){
    console.log(`this is the personobject prototype method with ${this.firstname}:: ${this.lastname}`);
  }
}


//Now for the policeman to inherit from the person we have
class Policeman extends Person{
  constructor(){
    super();
    this.onduty = "yes on duty"; 
  }
}

var p1 = new Policeman();
console.log(p1.grook());
console.log(p1.firstname);

module.exports = Policeman;