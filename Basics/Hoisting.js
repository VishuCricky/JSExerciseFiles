var a = 2;

choo();                  // works because `choo()`
                        // declaration is "hoisted"
function choo() {
    a = 3;

    console.log( a +'===Inside fun choo');   // 3

    var a;              // declaration is "hoisted"
                        // to the top of `choo()`
}

console.log( a+'===Outside fun choo');   // 2

/* Simple example to understand Hoisting */
/* Example 1:
Here the console output will be undefined as the complier will interpret var b=2; 
into 2 statements. 
1) var b; (the declaration, is processed during the compilation phase and it 
            will be hosted to top of the scope)
2) b = 2; (The second statement, the assignment, is left 'in' place for 
            the execution phase)
Thats why we get 'undefined' error and not 'ReferenceError'
AGAIN REITERATING
    Only the declarations themselves are hoisted, 
    while any assignments or other executable logic are left in place
*/

console.log("b: "+b); // undefined
var b = 2;

/* Example 3: */
doo();
function doo() {
    console.log("c: "+c); // undefined

    var c = 2;
}

/* Example 4:
Function declarations are hoisted, as we just saw. But function expressions are not.
*/

boo(); // not ReferenceError, but TypeError!

var boo = function bar() {
    // ...
};

/* Example 5:
    Even though it’s a named function expression, 
    the name identifier is not available in the enclosing scope:
*/

foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
    // ...
};

/* The above snippet is more accurately interpreted (with hoisting) as: */

/* 
var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
    var bar = ...self...
    // ...
} 

*/