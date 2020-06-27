function foo( a = 42, b = a + 1 ) {
  console.log( a, b );
}

foo();                  // 42 43
foo( undefined );       // 42 43
foo( 5 );               // 5 6
foo( void 0, 7 );       // 42 7
foo( null );            // null 1

/* Example 2 */
function foo( a = 42, b = a + 1 ) {
  console.log(
      arguments.length, a, b,
      arguments[0], arguments[1]
  );
}

foo();                  // 0 42 43 undefined undefined
foo( 10 );              // 1 10 11 10 undefined
foo( 10, undefined );   // 2 10 11 10 undefined
foo( 10, null );        // 2 10 null 10 null