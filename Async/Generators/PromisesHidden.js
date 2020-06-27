function run(gen){
  var args = [].slice.call(arguments,1),it;
  
  // initialize the generator in the current context
  it = gen.apply(this,args);

  // return a promise for the generator completing
  return Promise.resolve().then(
    function handleNext(value){
      // run to the next yielded value
      var next = it.next(value);

      return (function handleResult(next){
        // generator has completed running?
        if(next.done){
          return next.value;
        }
        // otherwise keep going 
        else{
          return Promise.resolve(next.value).then(
            // resume the async loop on
            // success, sending the resolved
            // value back into the generator
            handleNext,
            // if `value` is a rejected
            // promise, propagate error back
            // into the generator for its own
            // error handling
            function handleErr(err){
              return Promise.resolve(
                it.throw(err)
              ).then(handleResult);
            }
          );
        }

      }) (next);
    }
  );
}

function request(url){
  return new Promise(function (){
    ajax(url,resolve);
  });
}

function bar(url1,url2){
  return Promise.all([
    request( url1 ),
    request( url2 )
  ]);
}

function *foo(){
  // hide the Promise-based concurrency details
  // inside `bar(..)`
  var results = yield bar(
    "http://some.url.1",
    "http://some.url.2"
  );

  var r1 = results[0];
  var r2 = results[1];
  
  var r3 = yield request(
    "http://some.url.3/?v=" + r1 + "," + r2
  );

  console.log( r3 );
}

// use previously defined `run(..)` utility
run( foo );

/* 
Hiding your Promise logic inside a function that you merely call from your 
generator is especially useful if you’re going to do a sophisticated series 
flow-control. For example:

function bar() {
  Promise.all( [
      baz( .. )
      .then( .. ),
      Promise.race( [ .. ] )
  ] )
  .then( .. )
}

*/

