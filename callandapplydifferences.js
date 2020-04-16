//invoking a function can be done in the following ways

var obj = {
  name: "indrajith",
  greet: function(){
    console.log("Naiya 01");
    console.log(`Naiya arrangers ${this.name}---Allah`)   
  },
  twoParam: function(dt1,dt2){
    console.log(dt1);
    console.log(dt2);
  }
};

//Way1
obj.greet();
//Way2
obj.greet.call({name: "Chemistry"});
//Way3
obj.twoParam.apply({},["sfk","sfafd"]);