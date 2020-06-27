/* Example 1 
Example 2 even more imp to understand how `this` binding works
*/
function identify(){
  return this.name.toUpperCase;
}

function speak(){
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name : "kyle"
};

var you = {
  name : "vishnu"
}

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);

/* Example 2 : VERY VERY IMPORTANT
  UNDERSTAND IT THOROUGHLY
*/
console.log("============= Example 2 =============")
function mixin(sourceObj, targetObj){
  for(var key in sourceObj){
    if(!(key in targetObj)){
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  engines : 1,
  ignition : function(){
    console.log("Turning on my engine.");
  },
  drive : function(){
    this.ignition();
    console.log("Steering and moving forward.");
  }
};

var Car = mixin(Vehicle, {
  wheels : 4,
  drive : function(){
    Vehicle.drive.call(this);
    //this.ignition(); // This works as well
    console.log("Rolling on all " + this.wheels + " wheels!");
  }
});
//console.log(Object.keys(Car));
Car.drive();