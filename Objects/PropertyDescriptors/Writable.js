/* Example 1 */
/* As you can see, our modification of the value silently failed. 
If we try in strict mode, we get an error: */
var myObject = {};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );

myObject.a = 3;

myObject.a; // 2

/* Example 2 */
/* If we try in strict mode, we get an error: 
The TypeError tells us we cannot change a nonwritable property. */
"use strict";

var myTestObject = {};

Object.defineProperty( myTestObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );

myTestObject.a = 3; // TypeError