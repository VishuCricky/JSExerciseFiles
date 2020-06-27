/* By combining writable:false and configurable:false, 
you can essentially create a constant (cannot be changed, redefined, or deleted) 
as an object property, like */

var myObj = {};

Object.defineProperty(myObj, "FAVOURITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
});