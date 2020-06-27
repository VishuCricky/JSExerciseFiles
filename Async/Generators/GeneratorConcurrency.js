/* Example 1 : Manual */

var resMan = [];

function *reqDataManual(url){
  resMan.push(
    yield request(url)
  );
}

var it1Man = reqDataManual( "http://some.url.1" );
var it2Man = reqDataManual( "http://some.url.2" );

var p1Man = it1Man.next();
var p2Man = it2Man.next();

p1Man.then(function(data){
  it1Man.next(data);
  return p2Man;
}).then(function(data){
  it2Man.next(data);
});

/* Example 2 */

var res = [];

function *reqData(url){
  var data = yield request(url);
  yield;
  res.push(data);
}

var it1 = reqData( "http://some.url.1" );
var it2 = reqData( "http://some.url.2" );

var p1 = it1.next();
var p2 = it2.next();

p1.then(function(data){
  it1.next(data);
});
p2.then(function(data){
  it2.next(date);
});

Promise.all([p1,p2]).then(function(){
  it1.next();
  it2.next();
});