/* Example 1 */
var p = new Promise(function(resolve,reject){
  reject("promise rejected");
});

p.then(
  function(){
    // code never gets here
  }
  // assumed rejection handler, if omitted or
  // any other non-function value passed
  // function(err) {
  //     throw err;
  // }
);

/* Example 2 */
var p = Promise.resolve( 42 );

p.then(
    // assumed fulfillment handler, if omitted or
    // any other non-function value passed
    // function(v) {
    //     return v;
    // }
    null,
    function rejected(err){
        // never gets here
    }
);