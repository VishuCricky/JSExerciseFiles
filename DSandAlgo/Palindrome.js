let str = 'test';
//let str = 'nitin';

/* function isPalindrome(str) {
  let reverseString =  str.split('').reduce((acc,char)=> char + acc,'');
  if(reverseString === str){
    return true;
  }
  return false;
} */

/* function isPalindrome(str) {
  const reverseString =  str.split('').reverse().join('');
  return str === reverseString;
} */

function isPalindrome(str) {
  return str.split('').every((char, i)=>{
    return char === str[str.length - i - 1];
  });
}

console.log("isPalindrome: "+isPalindrome(str));