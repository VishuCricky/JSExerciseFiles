/* 
Promise.all([ .. ]) expects a single argument, an array, 
consisting generally of Promise instances. 
The promise returned from the Promise.all([ .. ]) call will receive a 
fulfillment message (msgs in this snippet) that is an array of all the 
fulfillment messages from the passed in promises, 
in the same order as specified (regardless of fulfillment order)

Technically, the array of values passed into Promise.all([ .. ]) 
can include Promises, thenables, or even immediate values. 
Each value in the list is essentially passed through Promise.resolve(..) 
to make sure it’s a genuine Promise to be waited on, 
so an immediate value will just be normalized into a Promise for that value. 
If the array is empty, the main Promise is immediately fulfilled.

The main promise returned from Promise.all([ .. ]) will only be fulfilled if and 
when all its constituent promises are fulfilled. If any one of those promises 
is instead rejected, the main Promise.all([ .. ]) promise is immediately rejected, 
discarding all results from any other promises
*/

function request(url){
  return new Promise(function(resolve,reject){
    ajax(url,resolve);
  });
}

var p1 = request( "http://some.url.1/" );
var p2 = request( "http://some.url.2/" );

Promise.all([p1,p2]).then(
  function(msgs){
    console.log(msgs);
  }
);