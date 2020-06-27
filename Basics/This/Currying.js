/* The primary reason for this behavior is to create a function 
(that can be used with new for constructing objects) that essentially ignores the this hard binding, 
but which presets some or all of the function’s arguments. 
One of the capabilities of bind(..) is that any arguments passed 
after the first this binding argument are defaulted as standard arguments to the underlying function 
(technically called “partial application,” which is a subset of “currying”). */

function choo(a,b){
  console.log("a:" + a + ", b:" + b );
}

// spreading out array as parameters
choo.apply(null, [1,2]); // a:2, b:3

// currying with `bind(..)`
var b = choo.bind(null,3);
b(4); // a:3, b:4