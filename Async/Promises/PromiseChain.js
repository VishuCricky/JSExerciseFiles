/* Example 1 */
var p = Promise.resolve(21);

p.then(function(v){
  console.log("v : "+v);
  return 21 * 2;
}).then(function(v1){
  console.log("v1 : "+v1);
});

/* Example 2 */
var b = Promise.resolve(30);

b.then(function(v){
  console.log("v : "+v);
  // create a promise to return
  return new Promise(function(resolve,reject){
    // introduce asynchrony!
    setTimeout(function(){
      resolve (30 * 2);
    },100);
  });
}).then(function(v1){
  console.log("v1 : "+v1);
});

/* Example 3 Delay Promise chain */

function delay(time) {
  return new Promise( function(resolve,reject){
      setTimeout( resolve, time );
  } );
}

delay( 100 ) // step 1
.then( function STEP2(){
  console.log( "step 2 (after 100ms)" );
  return delay( 200 );
} )
.then( function STEP3(){
  console.log( "step 3 (after another 200ms)" );
} )
.then( function STEP4(){
  console.log( "step 4 (next Job)" );
  return delay( 50 );
} )
.then( function STEP5(){
  console.log( "step 5 (after another 50ms)" );
} )

/* 
As described, technically there are two promises in that interchange: 
the 200ms-delay promise and the chained promise that the second then(..) chains 
from. But you may find it easier to mentally combine these two promises together, 
because the Promise mechanism automatically merges their states for you. 
In that respect, you could think of return delay(200) as creating a promise that 
replaces the earlier-returned chained promise.
*/