/* Example 1 */
var a = 1 / 0;  // Infinity (aka Number.POSITIVE_INFINITY)
var b = -1 / 0; // -Infinity (aka Number.NEGATIVE_INFINITY)


/* Example 2 */
var a = Number.MAX_VALUE;   // 1.7976931348623157e+308
a + a;                      // Infinity
a + Math.pow( 2, 970 );     // Infinity
a + Math.pow( 2, 969 );     // 1.7976931348623157e+308

/* 
Both mathematically and in JavaScript, 
Infinity / Infinity is not a defined operation. 
In JS, this results in NaN. 
*/