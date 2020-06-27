var obj = {
  a : 2
}

console.log(Object.getOwnPropertyDescriptor(obj,'a'));

var myObj = {};

Object.defineProperty(myObj, 'a' ,{
  value : 2,
  enumerable : true,
  writable : true,
  configurable : true
});

console.log("myObj: "+myObj.a);