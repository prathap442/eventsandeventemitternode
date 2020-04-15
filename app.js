var obj = {
  greet: "hello"  
}

obj.greet //one way accessing the object value for the key greet
obj['greet']// one more way of accessing the object for the key greet
var inj = 'greet'
console.log(obj[inj])// third way of accessing the value for the key in the object



var grofers = [];
function Grofers(){
  this.events = []  
}
Grofers.events.push(()=>{
 console.log("World1")   
});
/*
grofers.push(()=>{
  console.log("World2")   
});
grofers.push(()=>{
  console.log("World3")   
});

//for executing the function in the groferes array we iterate over the array and then call the function
grofers.forEach((item)=>{
  item();
})
*/