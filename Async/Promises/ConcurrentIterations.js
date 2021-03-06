if(!Promise.map){
  Promise.map = function(vals,cb){
    return Promise.all(
      vals.map(function(val){
        return new Promise(function(resolve,reject){
          cb(val,resolve);
        });
      })
    );
  };
}

var p1 = Promise.resolve( 21 );
var p2 = Promise.resolve( 42 );
var p3 = Promise.reject( "Oops" );

Promise.map([p1,p2,p3],function(pr,done){
  
  Promise.resolve( pr ).then(
    function (v){
      done(v * 2)
    },
    done
  );
}).then(function(vals){
  console.log( vals );    // [42,84,"Oops"]
} );