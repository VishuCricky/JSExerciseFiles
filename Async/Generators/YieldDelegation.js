/* Example 1 */
function *foo(){
  console.log("foo() starting");
  yield 3;
  yield 4;
  console.log("foo() end");
}

function *bar(){
  yield 1;
  yield 2;
  yield *foo();
  yield 5;
}

var it = bar();
it.next().value; // 1
it.next().value; // 2
it.next().value; // foo() starting
                 // 3
it.next().value; // 4
it.next().value; // foo() end
                 // 5

/* Example 2 */

function run(gen){
  var args = [].slice.call(arguments,1);
  var it = gen.apply(this,args);

  return Promise.resolve().then(
    function handleNext(value){
      var next = it.next(value);
      
      return (function handleResult(next){
        if(next.done){
          return next.value;
        }else {
          return Promise.resolve(next.value).then(
            handleNext,
            function handleError(){
              return Promise().resolve(
                it.throw(err)
              ).then(
                handleResult
              );
            }
          );
        }
      })(next);
    }
  );
}

function *foo() {
  var r2 = yield request( "http://some.url.2" );
  var r3 = yield request( "http://some.url.3/?v=" + r2 );

  return r3;
}

function *bar() {
  var r1 = yield request( "http://some.url.1" );

  // "delegating" to `*foo()` via `yield*`
  var r3 = yield *foo();

  console.log( r3 );
}

run( bar );
