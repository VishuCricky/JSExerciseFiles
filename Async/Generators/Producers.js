var something = (function(){
  var nextVal;
  return {
    // needed for `for..of` loops
    [Symbol.iterator] : function(){return this;},
    next : function(){
      if(nextVal === undefined){
        nextVal = 1;
      }else{
        nextVal = (3 * nextVal) + 6;
      }
      return {done : false, value: nextVal};
    }
  };
})();

console.log("get 1st value : "+something.next().value);

for(var v of something){
  console.log("v : "+v);

  if(v > 500){
    break;
  }
}

/* 
This manual for approach is certainly uglier than the ES6 for..of loop syntax, 
but its advantage is that it affords you the opportunity 
to pass in values to the next(..) calls if necessary.
*/
for (
  var ret;
  (ret = something.next()) && !ret.done;
) {
  console.log( ret.value );

  // don't let the loop run forever!
  if (ret.value > 500) {
      break;
  }
}