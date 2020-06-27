function *foo(){
  var r2 = yield request( "http://some.url.2" );
  var r3 = yield request( "http://some.url.3/?v=" + r2 );

  return r3;
}

function *boo(){
  var r1 = yield request( "http://some.url.1" );
  // "delegating" to `*foo()` via `run(..)`
  var r3 = yield run( foo );

  console.log( r3 ); 
}
run( bar );