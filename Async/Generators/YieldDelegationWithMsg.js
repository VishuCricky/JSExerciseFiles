function *foo(){
  console.log("inside foo() :", yield "B");
  console.log("inside foo() :", yield "C");
  return "D";
}

function *bar() {
  console.log( "inside `*bar()`:", yield "A" );
  // `yield`-delegation!
  console.log( "inside `*bar()`:", yield *foo() );
  console.log( "inside `*bar()`:", yield "E" );
  return "F";
}

var it = bar();
console.log("outside :",it.next().value); // outside: A
console.log("outside :",it.next(1).value);  // inside `*bar()`: 1, outside: B
console.log("outside :",it.next(2).value);  // inside foo() : 2, outside: C
console.log("outside :",it.next(3).value);  // inside foo() : 3, inside `*bar()`: D, outside: E
console.log("outside :",it.next(4).value); // inside `*bar()`: 4, outside : F

/* 
The 3 value is passed (through the yield-delegation in *bar()) 
into the waiting yield "C" expression inside of *foo().

*foo() then calls return "D", but this value doesn’t get 
returned all the way back to the outside it.next(3) call.

Instead, the "D" value is sent as the result of the waiting 
yield *foo() expression inside of *bar()—this yield-delegation expression 
has essentially been paused while all of *foo() was exhausted. 
So "D" ends up inside of *bar() for it to print out.

yield "E" is called inside of *bar(), 
and the "E" value is yielded to the outside as the result of the it.next(3) call.

*/

/* Example 2 */
function *bar() {
  console.log( "inside `*bar()`:", yield "A" );

  // `yield`-delegation to a non-generator!
  console.log( "inside `*bar()`:", yield *[ "B", "C", "D" ] );

  console.log( "inside `*bar()`:", yield "E" );

  return "F";
}

var it = bar();

console.log( "outside:", it.next().value );
// outside: A

console.log( "outside:", it.next( 1 ).value );
// inside `*bar()`: 1
// outside: B

console.log( "outside:", it.next( 2 ).value );
// outside: C

console.log( "outside:", it.next( 3 ).value );
// outside: D

console.log( "outside:", it.next( 4 ).value );
// inside `*bar()`: undefined
// outside: E

console.log( "outside:", it.next( 5 ).value );
// inside `*bar()`: 5
// outside: F