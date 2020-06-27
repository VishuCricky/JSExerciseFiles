/* Example 1 */
/* we see that when foo() is called, this.a resolves to our global variable a.
 Why? Because in this case, the default binding for this applies to the function 
 call, and so points `this` at the global object */
function foo() {
  console.log( this.a );
}

var a = 2;

foo(); // 2

/* Example 2 */
/* If strict mode is in effect, the global object is not eligible for the 
default binding, so the `this` is instead set to undefined */
function choo(){
  "use strict";
  console.log(this.b);
}
var b = 1;

choo(); // TypeError: `this` is `undefined`

/* Example 3 */
/*  */
function boo(){
  console.log(this.c);
}

var c = 3;
(function(){
  "use strict";
  foo(); // 3
});