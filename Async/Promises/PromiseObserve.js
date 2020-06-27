function timeoutDelay(delay){
  return new Promise(function(resolve,reject){
    //ajax(url,resolve);
    setTimeout(function(){
      resolve("Hurray : "+delay);
    },delay)
  });
}

Promise.race([
  Promise.observe(
    foo(),
    function cleanup(msg){
    // clean up after `foo()`, even if it
    // didn't finish before the timeout
}),timeoutDelay(3000)]);

if(!Promise.observe){
  Promise.observe = function(pr,cb){
    pr.then(
      function fulfilled (msg){
        // schedule callback async (as Job)
        Promise.resolve( msg ).then( cb );
      },
      function rejected(err){
        // schedule callback async (as Job)
        Promise.resolve( err ).then( cb );
      }
    );
    return pr;
  }
}