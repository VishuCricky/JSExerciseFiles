/* Example 1 */
var a, b;

function foo(x) {
    a = x * 2;
    baz();
}

function bar(y) {
    b = y * 2;
    baz();
}

function baz() {
    console.log(a + b);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

/* 
In this example, whether foo() or bar() fires first, 
it will always cause baz() to run too early (either a or b will still be undefined),
 but the second invocation of baz() will work, as both a and b will be available.

*/

/* There are different ways to address such a condition. Here’s one simple way: */

/* Example 2 */

/* 
The if (a && b) conditional around the baz() call is traditionally called a gate,
 because we’re not sure what order a and b will arrive, 
 but we wait for both of them to get there before we proceed to open the gate 
 (call baz()). */
var a, b;

function foo(x) {
    a = x * 2;
    if (a && b) {
        baz();
    }
}

function bar(y) {
    b = y * 2;
    if (a && b) {
        baz();
    }
}

function baz() {
    console.log( a + b );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );