function run(gen){
  var args = [].slice.call(arguments,1);
  var it = gen.apply(this,args);

  return Promise.resolve().then(
    function handleNext(value){
      var next = it.next(value);

      return (function handleResult(next){
        if(next.done){
          return next.value;
        }else{
          return Promise.resolve(next.value).then(
            handleNext,
            function handleErr(err){
              return Promise.resolve(
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

function request(delay){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve (1+delay);
    },delay);
  });
}

function *foo(val){
  if(val > 1){
    val = yield *foo(val - 1);
  }
  return yield request (300 + val);
}

function *bar(){
  var r1 = yield *foo(3);
  console.log("r1 :",r1);
}
run(bar);

/* 
1. create it1 for *bar()
2. create it2 for *foo(3)
2. 3 > 1 , creates another it3 for *foo(2) and it2 handsover iterator instace control to it3
3. 2 > 1 , creates another it4 for *foo(1) and it3 handsover iterator instace control to it4
4. return yield request (3000 + val); step returns a promise
*/