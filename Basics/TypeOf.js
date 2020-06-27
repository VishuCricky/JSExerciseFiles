/**
 * Link to study the topic in detail
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */

var a;
console.log(typeof a); // "undefined"

a = 'Hello';
console.log(typeof a); // "string"

a = 42;
console.log(typeof a); // "number"

a = true;
console.log(typeof a); // "boolean"

a = null;
console.log(typeof a); // "object"--weird, bug

a = undefined;
console.log(typeof a); // "undefined"

a = { b : 'c'};
console.log(typeof a); // "object"


console.log(typeof !!(1));

// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';


// Strings
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString


// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()


// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 


// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results


// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object'; 
typeof new Number(1) === 'object'; 
typeof new String('abc') === 'object';


// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

var func = new Function();

typeof func; // It will return 'function'

// Parentheses can be used for determining the data type of expressions.
var iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string'


//Errors
typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError , why? refer below temporal dead zone
typeof newConstVariable; // ReferenceError , why? refer below temporal dead zone
typeof newClass; // ReferenceError , why? refer below temporal dead zone

let newLetVariable;
const newConstVariable = 'hello';
class newClass{};

/**
 * The temporal dead zone and typeof
 */

// prints out 'undefined'
console.log(typeof undeclaredVariable);
// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;

/**
Another example of temporal dead zone combined with lexical scoping

Due to lexical scoping, the identifier foo inside the expression (foo + 55) evaluates to the if block's foo, and not the overlying variable foo with the value of 33.

In the same line, the if block's foo has already been created in the lexical environment, but has not yet reached (and terminated) its initialization (which is part of the statement itself). 

The if block's foo is still in the temporal dead zone. 
*/

function test(){
  var foo = 33;
  {
     let foo = (foo + 55); // ReferenceError
  }
}
test();