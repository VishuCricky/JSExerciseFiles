const testNum = 20;
function fizzBuzz(n) {
  
  for(let i=1; i <= n;i++){
    //Is the number multiple of both 3 and 5?
    //if(i % 15 === 0) --> another way
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    //Is the number multiple of 3?
    }else if(i % 3 === 0){
      console.log('fizz');
    //Is the number multiple of 5?
    }else if(i % 5 === 0){
      console.log('buzz');
    }else{
      console.log(i);
    }
  }
}

fizzBuzz(testNum);