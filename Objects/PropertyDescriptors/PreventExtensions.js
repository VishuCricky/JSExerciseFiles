/* If you want to prevent an object from having new properties added to it, 
but otherwise leave the rest of the object’s properties alone, 
call Object.preventExtensions(..) */

var myObject = {
  a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
myObject.b; // undefined

/* In non-strict mode, the creation of b fails silently. 
In strict mode, it throws a TypeError. */