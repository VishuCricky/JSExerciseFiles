/* Reverse a String */
var abc = 'vishnu prasad';

//console.log("testSplit: "+abc.split());
console.log("reversedStringValue: "+reverse(abc));


function reverse(str) {
  let reversedString = '';
  if (typeof str == "string"){
    /* Method 1
    for(var i = 0; i < str.length;i++){
      reversedString = reversedString + str.substring(str.length-(i+1),str.length-i);
      console.log("index: "+i+" character: "+reversedString);
    }
    */ 

    // Method 2
    /* var strArr = str.split('');
    strArr.reverse();
    reversedString = strArr.join(''); */

    /* Method 3 */
    /* for(let character of str){
      reversedString = character + reversedString;
      console.log("reversedString: "+reversedString+' character: '+character);
    } */

    /* Method 4 */
    return str.split('').reduce((reversed,character)=>{
      console.log("character: "+character+" reversed: "+reversed);
      return character + reversed;
    },'')
  }
  return reversedString;
}

