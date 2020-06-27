/* Example 1 */
var p1 = new Promise( function(resolve,reject){
  resolve( 42 );
} );

var p2 = Promise.resolve( 42 );

/* Example 2 */
/* 
But if you pass a genuine Promise to Promise.resolve(..), 
you just get the same promise back:
*/

var p1 = Promise.resolve( 42 );

var p2 = Promise.resolve( p1 );

p1 === p2; // true


/* Example 2 */

/* 
The first callback parameter of the Promise(..) constructor will unwrap 
either a thenable (identically to Promise.resolve(..)) or a genuine Promise:
*/

var rejectedPr = new Promise(function(resolve,reject){
  // resolve this promise with a reject promise
  resolve(Promise.reject("Oops"));
});

rejectedPr.then(
  function fulfilled(){
    //code never gets here
  },
  function rejected(err){
    console.log(err); // "Oops"
  }
);

/* 
The previously mentioned reject(..) does not do the unwrapping that resolve(..) does.
 If you pass a Promise/thenable value to reject(..), that untouched value 
 will be set as the rejection reason. A subsequent rejection handler would 
 receive the actual Promise/thenable you passed to reject(..), 
 not its underlying immediate value.
*/