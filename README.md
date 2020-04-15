* What is an Event?
  An event is nothing but an action and when an event occurs a certain part of code would get executed if required as per the action(event) being triggered .

* What are the kinds of events?
  There are 2 kinds of the events that are oftenly being misunderstood
  - System Events
     These are the events that are happening at the low level at the system level that tries to emit the events .
  - Custom Events
     These are the events that are happening not at the low level at the system level but at the javascript level and we can create the custom events at the javascript level and then emit those event .
* What are the object methods and the properties? And the fundamental concepts that are required in understandnig the Eventemitter?
```
var obj = {
  greet: "Hello"  
}
console.log
```
What is an eventEmitter?
  An event emitter is the javascript core that is responile for the genration fo the events. 
  An event is being created based on some action being perforemed .


* What is the fundamental piece of understanding how the core node modules of node.js built would be with the Object.create and the prototypes.


```
var person = {
  firstname: "Mohan",
  lastname: "Prathap"
  fullname: function(){
    this.firstname + "::::" + this.lastname 
  }
}

var john = Object.create(person);
var jane = Object.create(person);
john.firstname = "John";
jane.firstname = "Jane";
console.log(john.fullname);
console.log(jane.fullname);
```

