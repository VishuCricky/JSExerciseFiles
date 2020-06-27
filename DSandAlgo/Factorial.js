const factorial = (n)=> {
  if(n === 1){
    console.log('returning 1');
    return 1;
  }else{
    n * factorial(n-1);
  }

};

const answer = factorial(3);