if(!Promise.first){
  Promise.first = function(prs){
    return new Promise(function(resolve,reject){
      // loop through all promises
      prs.forEach(function(pr){
        // normalize the value
        Promise.resolve(pr)
        // whichever one fulfills first wins, and
        // gets to resolve the main promise
        .then(resolve);
      });
    });
  };
}

function timeoutDelay(delay){
  return new Promise(function(resolve,reject){
    //ajax(url,resolve);
    setTimeout(function(){
      resolve("Hurray : "+delay);
    },delay)
  });
}

/* var p1 = request("http://some.url.1/");
var p2 = request("http://some.url.2/"); */

var p1 = timeoutDelay(8000);
var p2 = timeoutDelay(5000);

Promise.first([p1,p2]).then(function(msg){
  console.log(msg);
})

