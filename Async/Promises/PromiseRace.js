// a utility for timing out a Promise
function timeoutPromise(delay){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      reject("Timeout");
    },delay);
  });
}

// setup a timeout for `foo()`
// attempt `foo()`
// timeoutPromise(3000) - give it 3 seconds
Promise.race([foo(),timeoutPromise(3000)]).then(
  function(){
    // `foo(..)` fulfilled in time!
  },
  function(err){
    // either `foo()` rejected, or it just
    // didn't finish in time, so inspect
    // `err` to know which
    console.log("err : "+err);
  }
);