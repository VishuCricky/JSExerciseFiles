/* By calling foo(..) with new in front of it, 
we’ve constructed a new object and set that new object as the `this` 
for the call of foo(..). 
So new is the final way that a function call’s this can be bound. 
We’ll call this new binding. */

/* 
1) A brand new object is created (aka constructed) out of thin air.
2) The newly constructed object is [[Prototype]]-linked.
3) The newly constructed object is set as the this binding for that function call.
4) Unless the function returns its own alternate object, 
the new-invoked function call will automatically return the newly constructed object.

*/

function foo(){
  this.a = a;
}

var b = new foo( 2 );
console.log( b.a );

/* Example 2 */

function foo(a){
  this.a = a;
  return function (){
    console.log("returned function executed");
  };
}

var bar = new foo(2);
console.log("typeof bar : "+typeof bar); //"function"
console.log("bar : "+bar); // prints entire function
console.log("bar.a : "+bar.a); // undefined
