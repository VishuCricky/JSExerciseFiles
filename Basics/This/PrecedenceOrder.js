/* Example 1 */
/* `new` binding is more precedent than implicit binding */
console.log("=======Example 1 execution starts=======");
function foo(something){
  this.a = something;
}

var obj = {
  foo : foo
};

var obj2 = {};

obj.foo(2);
console.log("obj.a: "+obj.a); // 2

obj.foo.call(obj2, 3);
console.log("obj2.a: "+obj2.a); // 3

var bar = new obj.foo(4);
console.log("obj.a: "+obj.a); // 2
console.log("bar.a: "+bar.a); // 4

/* Example 2 */
/* Whoa! bar is hard-bound against obj1, but new bar(3) did not change obj1.a to 3 
as we would have expected. Instead, the hard-bound (to obj1) call to bar(..) is able 
to be overridden with new. Since new was applied, we got the newly created object back, 
which we named baz, and we see in fact that baz.a has the value 3. */
console.log("=======Example 2 execution starts=======");
function choo(something){
  this.a = something;
}

var testObj = {};

var beast = choo.bind(testObj);
beast( 2 );
console.log("testObj 1: "+testObj.a); //2

var baz = new beast(4);
console.log("testObj 2: "+testObj.a); //2
console.log("baz : "+baz.a); //4

/* Example 3 */

/* Why is new being able to override hard binding useful?

The primary reason for this behavior is to create a function 
(that can be used with new for constructing objects) that essentially ignores the this hard binding, 
but which presets some or all of the function’s arguments. 
One of the capabilities of bind(..) is that any arguments passed 
after the first this binding argument are defaulted as standard arguments to the underlying function 
(technically called “partial application,” which is a subset of “currying”). For example */
console.log("=======Example 3 execution starts=======");

function foo(p1,p2) {
  this.val = p1 + p2;
}

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var bar = foo.bind( null, "p1" );

var baz = new bar( "p2" );

baz.val; // p1p2