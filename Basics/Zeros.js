var a = 0 / -3; // -0
var b = 0 * -2; // -0

// but the spec insists on lying to you!
a.toString();               // "0"
a + "";                     // "0"
String( a );                // "0"

// strangely, even JSON gets in on the deception
JSON.stringify( a );   // "0"

/* Interestingly, the reverse operations (going from string to number) don’t lie: */

+"-0";              // -0
Number( "-0" );     // -0
JSON.parse( "-0" ); // -0

/* In addition to stringification of negative zero being deceptive to hide 
its true value, the comparison operators are also (intentionally) configured to lie 
*/
/* Example 2 */
var a = 0;
var b = 0 / -3;

a == b;     // true
-0 == 0;    // true

a === b;    // true
-0 === 0;   // true

0 > -0;     // false
a > b;      // false

/* Example 2 */

function isNegZero(n) {
  n = Number( n );
  return (n === 0) && (1 / n === -Infinity);
}

isNegZero( -0 );        // true
isNegZero( 0 / -3 );    // true
isNegZero( 0 );         // false