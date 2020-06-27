//"use strict";
var anotherObj = {
  a : 2
};

/* Object.defineProperty(anotherObj, "a", {
  writable : false
}); */

var myObj = Object.create( anotherObj );

for(var k in myObj){
  console.log("found value: "+k);
}

anotherObj.a; //2
myObj.a; //2

anotherObj.hasOwnProperty("a"); // true
myObj.hasOwnProperty("a"); // false

console.log("a" in myObj);
console.log(Object.getOwnPropertyDescriptors(myObj));

myObject.a++; // oops, implicit shadowing!

anotherObj.a; //2
myObj.a; //3

console.log("myObj: "+JSON.stringify(myObj));
console.log(Object.getOwnPropertyDescriptors(myObj));
myObj.hasOwnProperty("a"); // trues