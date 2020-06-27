function foo(x,y,cb){
  setTimeout(function(){
    cb(x+y);
  },1000);
}

/* Manual */
function fooThunk(cb){
  foo( 3, 4, cb );
}


/* Utility */

function thunkify(fn){
  var args = [].slice.call(arguments,1);
  return function(cb){
    args.push(cb);
    return fn.apply(null,args);
  };
}

var fooThunk = thunkify(foo,3,4);

fooThunk(function(sum){
  console.log("sum :",sum);
});

/* Example 2 */
function thunkify(fn){
  return function(){
    var args = [].slice.call(arguments);
    return function(cb){
      args.push(cb);
      return fn.apply(null,args);
    };
  };
}

var whatIsThis = thunkify( foo );

var fooThunk = whatIsThis( 3, 4 );

// later
fooThunk( function(sum) {
    console.log( sum );     // 7
} );

/* 
So, my proposal is “thunkory” (“thunk” + “factory”). So, thunkify(..) produces
 a thunkory, and a thunkory produces thunks. 
 That reasoning is symmetric to my proposal for “promisory”
*/
var fooThunkory = thunkify( foo );

var fooThunk1 = fooThunkory( 3, 4 );
var fooThunk2 = fooThunkory( 5, 6 );

// later

fooThunk1( function(sum) {
    console.log( sum );     // 7
} );

fooThunk2( function(sum) {
    console.log( sum );     // 11
} );


