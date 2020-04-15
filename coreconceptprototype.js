//the protoypal inheritance can be understood here
var person = {
    firstname: "Mohan",
    lastname: "Prathap",
    fullname: function(){
      console.log(this.firstname + "::::" + this.lastname );
    }
};
  
var john = Object.create(person);
//here john points to the prototype of the person
var jane = Object.create(person);
//here jane also points to the prototype of the person
john.firstname = "John";
jane.firstname = "Jane";
john.fullname();
jane.fullname();

//please have a look at the prototypechain.png for the sake of the prototype chaining concept understanding.