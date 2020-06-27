
/* EXAMPLE 1 */

var obj = {
  a: "learn JS!",
  b: 42,
  c: true
};

obj.a; // "learn JS!"
obj.b; // 42
obj.c; // true

obj["a"]; // "learn JS!"
obj["b"]; // 42
obj["c"]; // true

/* EXAMPLE 2  ON ACCESSING OBJ THROUGH [] */
var objBracket = {
  a: "master JS!",
  b: 42
};

var b = "a";

objBracket[b]; // "master JS!"
objBracket["b"]; // 42

/* Example 3 */
/* Declaraing Objects through computed property names */
console.log("===================Example 3===================");

var prefix = "foo";

var myObj = {
  [prefix + "boo"]: 'he he he',
  [prefix + "choo"]: 'bow bow bow'
};

console.log(myObj['fooboo']);
console.log(myObj['foochoo']);