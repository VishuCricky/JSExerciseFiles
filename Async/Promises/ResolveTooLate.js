function foo(x) {
  // start doing something that could take a while

  // construct and return a promise
  return new Promise( function(resolve,reject){
      // eventually, call `resolve(..)` or `reject(..)`,
      // which are the resolution callbacks for
      // the promise.
  } );
}

var p = foo( 42 );

p.then(function(){
  p.then(function (){
    console.log("C");
  });
  console.log("A");
});

p.then(function(){
  console.log("B");
});

// A B C