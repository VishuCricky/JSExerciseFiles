// `foo()` is a Promise-aware function

// `timeoutPromise(..)`, defined ealier, returns
// a Promise that rejects after a specified delay

function timeoutPromise(delay){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      reject("Oops");
    },delay);
  });
}

// setup a timeout for `foo()`
Promise.race([foo(),timeoutPromise(100)]).then(
  function (){
     // `foo(..)` fulfilled in time!
  },
  function(err){
    // either `foo()` rejected, or it just
    // didn't finish in time, so inspect
    // `err` to know which
  }
);