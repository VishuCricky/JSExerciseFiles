"use strict";

const maxCharStr = 'asdjflkjsdf lkj';
const maxCharMap = {};
let max = 0;
let maxChar = '';

for(let char of maxCharStr){
  maxCharMap[char] = (maxCharMap[char] + 1) || 1;
  /* or use below code */
  /* if(maxCharMap[char]){
    maxCharMap[char]++
  }else{
    maxCharMap[char] = 1;
  } */
}

for(let char in maxCharMap){
  if(maxCharMap[char] > max){
    max = maxCharMap[char];
    maxChar = char;
  }
}

console.log("maxCharMap: "+'\n'+JSON.stringify(maxCharMap));
console.log("maxChar: "+maxChar,"max: "+max);


/* function maxChar(str) {
  let maxCharCounted = str.split('').reduce((allCharArr,char)=>{
    if(char in allCharArr){
      allCharArr[char]++;
    }else{
      allCharArr[char] = 1;
    }
    return allCharArr;
  },{});
  //console.log('maxCharCounted: '+JSON.stringify(maxCharCounted));
  return maxCharCounted;
} */

//console.log("maxChar: "+'\n'+JSON.stringify(maxChar(maxCharStr)));

