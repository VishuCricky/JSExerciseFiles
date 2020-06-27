function foo(x,y,cb){
  ajax(
    "http://some.url.1/?x=" + x + "&y=" + y,
    cb
  );
}

foo(3,4,function(err,txt){
  if (err) {
    console.error( err );
  }
  else {
      console.log( text );
  }
});


/* Below is the wrapper on how to build a wrapper for the above */
if(!Promise.wrap){
  Promise.wrap = function(fn){
    return function(){
      var args = [].slice.call(arguments);
      return new Promise(function(resolve,reject){
        fn.apply(
          null,
          args.concat(function(err,val){
            if(err){
              reject(err);
            }else{
              resolve(val);
            }
          })
        );
      });
    };
  };
}

var request = Promise.wrap( ajax );

/* 

This is how to use it

request( "http://some.url.1/" )
.then( )
..

*/


/* 
Example 2
*/

var request = Promise.wrap(ajax);

function foo(x,y,cb){
  request("http://some.url.1/?x=" + x + "&y=" + y)
  .then(
    function fulfilled(text){
      cb(null,text)
    },
    cb
  );
}

var betterFoo = Promise.wrap(foo);
betterFoo(11,31)
.then(
  function fulfilled(text){
    console.log( text );
  },
  function rejected(err){
      console.error( err );
  }
);

