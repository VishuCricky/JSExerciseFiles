var a = 41;
var b = "42";
var c = "43";

a < b;      // true
b < c;      // true

/**
 * What happens here? In section 11.8.5 of the ES5 specification, 
 * it says that if both values in the < comparison are strings, as it is with b < c, 
 * the comparison is made lexicographically (aka alphabetically like a dictionary). 
 * But if one or both is not a string, as it is with a < b, 
 * then both values are coerced to be numbers, and a typical numeric comparison occurs.
 */


 /**
  * The biggest gotcha you may run into here with comparisons between potentially different 
  * value types—remember, there are no “strict inequality” forms to use—is when one of the values 
  * cannot be made into a valid number, such as:
  */

var a = 42;
var b = "foo";

a < b;      // false
a > b;      // false
a == b;     // false

/**
 * Wait, how can all three of those comparisons be false? 
 * Because the b value is being coerced to the “invalid number value” NaN in the < and > comparisons, 
 * and the specification says that NaN is neither greater than nor less than any other value.
 */