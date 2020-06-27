/* Example 1 */

var p = new Promise( function(resolve,reject){
  foo.bar();  // `foo` is not defined, so error!
  resolve( 42 );  // never gets here :(
} );

p.then(
  function fulfilled(){
      // never gets here :(
      console.log("no error");
  },
  function rejected(err){
      // `err` will be a `TypeError` exception object
      // from the `foo.bar()` line.
      console.log("err : "+err); // ReferenceError: foo is not defined
  }
);


/* Example 2 */

var p = new Promise( function(resolve,reject){
  resolve( 42 );
} );

p.then(
  function fulfilled(msg){
      foo.bar();
      console.log( msg ); // never gets here :(
  },
  function rejected(err){
      // never gets here either :(
  }
);

/* 
Wait, that makes it seem like the exception from foo.bar() 
really did get swallowed. Never fear, it didn’t. But something deeper is wrong, 
which is that we’ve failed to listen for it. 
The p.then(..) call itself returns another promise, 
and it’s that promise that will be rejected with the TypeError exception.
*/

/* Example 3 */
