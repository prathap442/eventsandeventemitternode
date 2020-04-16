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


.call and .apply and () invoking the function by these 3 ways
Ways of invoking a function would be 
```
var collectionator = function(){
  console.log("jksfk")
}

collectionator() // way 1 of calling
collectionator.call()// way 2 of calling collectionator
collectionator.call({},param1,param2)// way2 of calling collectionator with params
collectionator.apply()//way3 of calling the collectionator
collectionator.apply({},[param1, param2])//way3 of calling the collectionator with params
```

What is the utils method final usecase?

The Utils does the processing adding the prototype of OneObject to the other Object

utils.inherits(Greetr,Person)
To the Prototype chain of the Greetr the Prototype chaing of the person would also be attached so all the prototype methods of the person would be accessible by the Greetr objects .




What are the classes in Javascript really underthe hood
In javascript 
Ans: Prove them by example that the classes are the functions 
```
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

```


* Is the Javascript asynchronous or synchronous?
  Javascript is the Synchronous but when coming to the nodejs which execute the common js with the help of the V8 egine, runs asynchronously .

* Libuv is the c++ core of the Node and it has the functionality to deal with the system events and why the 
nodejs architecture is called non-blocking, event driver I/o architecture?
Ans:
```
  - Let us take this by example that we want to make a request to the event driven non-blocking-I/O .
  - Now that we have that eventloop in the libuv and that libuv has got the eventloop part and has got some queue where the events that are completed from the event loop will be put into that queue . Once the events are completed then the event related completion code would get executed and the execution of such code can happen by a callback getting triggered from the libuv to the V8 engine and the V8 engine being synchronous executes the code line by line and then if you look at the architecture on an overview for 100 requests that came to hit the node server all the 100 events would start the executions at the same time and the thread would not wait for the response to get done and move fo another task

  The scenario could be explained well in the 
  
  
  eventdrivennonblockingio.png

```