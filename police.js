var Policeman = require('./usingclassesandextends.js');
var p1 = new Policeman();
console.log(p1.firstname);
p1.grook();
var p2 = new Policeman();
console.log(p2.lastname);
p2.grook();

console.log(p1.__proto__.__proto__ === p2.__proto__.__proto__);
