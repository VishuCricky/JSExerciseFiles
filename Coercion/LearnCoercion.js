/* EXAMPLE OF EXPLICT COERCION */
var a = "42";
var b = Number(a);

a; // "42" -- "string"
b; // 42 -- number

/* EXAMPLE OF IMPLICT COERCION */

var a1 = "42";
var b1 = a * 1; // implicitly coerced to 42 here

a; // "42" -- "string"
b; // 42 -- number

/* EXAMPLE OF NON PRIMITIVE VALUES */
var arr = [1,2,3];
var brr = [1,2,3];
var crr = "1,2,3";

arr == crr; // true
arr == crr; // true
arr == brr; // false