function foo(x,y){
  ajax(
    "http://some.url.1/?x=" + x + "&y=" + y,
    function(){
      if(err){
        // throw an error into `*main()`
        it.throw(err);
      }else {
        // throw an error into `*main()`
        it.next(data);
      }
    }
  );
}

function *main(){
  try{
    var text = yield foo(11,31);
    console.log(text);
  }
  catch(err){
    console.error( err );
  }
}

var it = main();
// start it all up!
it.next();