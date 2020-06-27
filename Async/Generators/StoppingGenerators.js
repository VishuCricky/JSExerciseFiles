function *something(){
  var nextVal;
  try{
    while(true){
      if(nextVal === undefined){
        nextVal = 1;
      }else{
        nextVal = (3 * nextVal) + 6;
      }
      yield nextVal;
    }
  }
  finally{
    console.log("clean up the something generator");
  }
  
}

var it = something();
for(var v of it){
  console.log("v :",v);
  if(v > 500){
    it.return("Stopping the generator by calling return function on the iterator");
  }
}