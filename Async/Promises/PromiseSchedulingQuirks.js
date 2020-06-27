/* 
It’s important to note, though, that there are lots of nuances of scheduling 
where the relative ordering between callbacks chained off two separate Promises 
is not reliably predictable.

If two promises p1 and p2 are both already resolved, 
it should be true that p1.then(..); p2.then(..) would end up calling the 
callback(s) for p1 before the ones for p2. 
But there are subtle cases where that might not be true, such as the following:
*/

var p3 = new Promise(function(resolve,reject){
  resolve("B");
});

var p1 = new Promise(function(resolve,reject){
  resolve(p3);
});

var p2 = new Promise(function(resolve,reject){
  resolve("A");
});

p1.then(function(v){
  console.log(v);
});

p2.then(function(v){
  console.log(v);
});

// A B  <-- not  B A  as you might expect

/* 
p1 is resolved not with an immediate value, but with another promise p3, 
which is itself resolved with the value "B". 
The specified behavior is to unwrap p3 into p1, but asynchronously, 
so p1’s callback(s) are behind p2’s callback(s) in the asynchronus Job queue

*/