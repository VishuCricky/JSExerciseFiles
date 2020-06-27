/* Example 1 */
/* The final defineProperty(..) call results in a TypeError, 
regardless of strict mode, if you attempt to change the descriptor definition 
of a nonconfigurable property. Be careful: as you can see, 
changing configurable to false is a one-way action, and cannot be undone */

var myObject = {
  a: 2
};

myObject.a = 3;
myObject.a; // 3

Object.defineProperty( myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // not configurable!
  enumerable: true
} );

myObject.a; // 4
myObject.a = 5;
myObject.a; // 5

Object.defineProperty( myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
} ); // TypeError


/* Example 2 */
/* configurable:false prevents the ability to use the delete operator 
to remove an existing property: */
var testObj = {
  a: 2
};

testObj.a; // 2
delete testObj.a;
testObj.a; // undefined

Object.defineProperty( testObj, "a", {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
} );

testObj.a; // 2
delete testObj.a;
testObj.a; // 2