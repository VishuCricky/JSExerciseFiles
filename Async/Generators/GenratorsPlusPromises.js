function request(url){
  return new Promise(function(){
    ajax(url,resolve);
  });
}

function foo(x,y){
  return request("http://some.url.1/?x=" + x + "&y=" + y);
}

function *main(){
  try {
    var text = yield foo(10,11);
    console.log(text);
  } catch (error) {
    console.error(error);
  }
}

var it = main();

var p = it.next().value;

p.then(
  function(text){
    it.next( text );
  },
  function(err){
    it.throw( err );
  }
);