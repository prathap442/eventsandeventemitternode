//8bytes is nothing but the 8*8bits is nothing but the 64 bits
var buffer = new ArrayBuffer(8); //this nothing but of the 64 bit .
var view = new Int32Array(buffer);//this array will store the sets of the 32 bits .
view[0] = "12"
view[1] = "43"
view[2] = "34"//this would not be going into the buffer as the buffer size exceeds 64 bits
console.log(view.toString());
console.log("--------------");
console.log(view.reverse());