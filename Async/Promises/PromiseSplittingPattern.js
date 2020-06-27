function getY(x){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve((3*x)-1);
    },1000);
  });
}

function foo(bar,baz){
  var x = bar * baz;
  return getY(x).then(
    function(y){
      return [x,y];
    }
  );
}

foo(10,20).then(function(msgs){
  var x = msgs[0];
  var y = msgs[1];
  console.log( x, y );
});

/* 
Handling it using 2 Promises
*/

function foo(bar,baz){
  var x = bar * baz;

  return [Promise.resolve(x),getY(x)];
}

Promise.all(foo(10,20)).then(function(msgs){
  var x = msgs[0];
  var y = msgs[1];
  console.log(x,y);
});


/* 
Handling it using UNWRAP/SPREAD Operator

fn.apply(null)
*/
function spread(fn){
  return Function.apply.bind(fn,null);
}

Promise.all(foo(10,20).then(
  spread(function(x,y){
    console.log(x,y);
  })
));

[].slice.call(arguments,1)