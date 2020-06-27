var a = 2 / "foo";
console.log("a : "+a); // NaN
console.log("typeof a : "+typeof a); // "number"

if(a == NaN || a === NaN){
  console.log("Never!");
  /* 
  NaN is a very special value in that it’s never equal to another NaN value 
  (i.e., it’s never equal to itself). It’s the only value, in fact, 
  that is not reflexive (without the Identity characteristic x === x). 
  So, NaN !== NaN. A bit strange, huh? 
  */
}

isNaN(a); // true
console.log("isNaN(a) : "+isNaN(a));

/* isNan() function flaw */
var b = "choo";
isNaN(b); // true -- ouch
console.log("isNaN(b) : "+isNaN(b));

/* Clearly, "foo" is literally not a number, 
but it’s definitely not the NaN value either! 
This bug has been in JS since the very beginning (over 19 years of ouch) 
 */

 /* As of ES6, finally a replacement utility has been provided: Number.isNaN(..) */

 Number.isNaN(b); // false
 console.log("Number.isNaN(b) : "+Number.isNaN(b));