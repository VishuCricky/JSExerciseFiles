/* Example 1 */

/* Even though baz appears to be a reference to obj.boo, in fact, 
it’s really just another reference to boo itself. 
Moreover, the call-site is what matters, and the call-site is baz(), 
which is a plain, undecorated call, and thus the default binding applies */
function boo(){
  console.log(this.a);
}

var obj = {
  c : 2,
  boo : boo
};

var baz = obj.boo;

var c = 'oops, global!';

baz(); // oops, global!

/* Example 2 */
/* The more subtle, more common, and more unexpected way this occurs 
is when we consider passing a callback function 

Parameter passing is just an implicit assignment, 
and since we’re passing a function, it’s an implicit reference assignment, 
so the end result is the same as the previous snippet
*/

function foo() {
  console.log( this.a );
}

function doFoo(fn) {
  // `fn` is just another reference to `foo`

  fn(); // <-- call-site!
}

var obj = {
  a: 2,
  foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"