/* Example 1 */
function foo(){
  console.log("class functions");
}

console.log("typeof foo.prototype: "+typeof foo.prototype);

var a = new foo();

console.log(Object.getPrototypeOf( a ));
/* each object created from calling new Foo()
 will end up [[Prototype]]-linked to this “Foo dot prototype” object. */
if(Object.getPrototypeOf(a) === foo.prototype){
  console.log("It's absolutely true");
}

function bar(){
  console.log("class b functions");
}

/* Below is not true */
if(bar.prototype === foo.prototype){
  console.log("2 diff functions prototype obj points to the same obj");
}

console.log("typeof foo: "+typeof foo);
console.log("typeof foo.prototype.constructor: "+typeof foo.prototype.constructor);
console.log("typeof a.constructor: "+typeof a.constructor);

if(foo.prototype.constructor === foo){
  console.log("yes foo.prototype.constructor === foo");
}

if(a.constructor === foo){
  console.log("yes a.constructor === foo");
}

