var res = [];

runAll(
  function*(){
    var p1 = request( "http://some.url.1" );
    yield;
    res.push(yield p1);
  },
  function*(){
    var p2 = request( "http://some.url.2" );
    yield;
    res.push(yield p2);
  }
);