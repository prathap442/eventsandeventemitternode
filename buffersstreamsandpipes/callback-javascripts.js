/*

What is the callback Function?
- The function that is being passed to another function for the sake of getting invoked at some point.
- The callback function will be invoked at some instinct in that function .
*/


function greet(callbackFunction){
  console.log("The greet function is invoked!!!");
  callbackFunction();
}

greet(function(){
  console.log("This is the callback Function1");   
})

greet(function(){
  console.log("This is the callback Function2");  
})