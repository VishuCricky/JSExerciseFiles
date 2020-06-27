/* Example 1 */

function add(xPromise,yPromise){
   // `Promise.all([ .. ])` takes an array of promises,
    // and returns a new promise that waits on them
    // all to finish
  return Promise.all([xPromise,yPromise])
    // when that promise is resolved, let's take the
    // received `X` and `Y` values and add them together.
  .then(function(values){
    return values[0] + values[1];
  });
  
}

// `fetchX()` and `fetchY()` return promises for
// their respective values, which may be ready
// now or later
add(fetchX(),fetchY())

.then(
  // fullfillment handler
  function(sum){
    console.log(sum);
  },
  // rejection handler
  function(err) {
    console.error( err ); // bummer!
  }

);

/* Example 2 */

function foo(x){
  // start doing something that could take a while

  // construct and return a promise
  new Promise(function (resolve,reject){
    // eventually, call `resolve(..)` or `reject(..)`,
    // which are the resolution callbacks for
    // the promise.
  });
}

var p = foo(42);
bar(p);
baz(p);

function bar(fooPromise){
  // listen for `foo(..)` to complete
  fooPromise.then(
    function(){
      // `foo(..)` has now finished, so
      // do `bar(..)`'s task
    },
    function(){
      // oops, something went wrong in `foo(..)`
    }
  );
}

// ditto for `baz(..)`

/* Another way to approach this */
function bar() {
  // `foo(..)` has definitely finished, so
  // do `bar(..)`'s task
}

function oopsBar() {
  // oops, something went wrong in `foo(..)`,
  // so `bar(..)` didn't run
}

// ditto for `baz()` and `oopsBaz()`
p.then(bar, oppsBar);
p.then(baz, oppsBaz);
