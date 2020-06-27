/* Example 1 */
function foo(){
  try{
    return 42;
  }
  finally{
    console.log("Hello!");
  }
  console.log("never runs");
}

console.log("foo() : "+foo());
// Hello!
// 42

/* Example 2 */
function boo(){
  try{
    throw 42;
  }
  finally{
    console.log("Hello!");
  }
  console.log("never runs");
}

console.log("boo() : "+boo());
// Hello!
// Uncaught Exception: 42

/* Example 2 */
function doo(){
  try{
    return 42;
  }
  finally{
    throw "Opps!";
  }
  console.log("never runs");
}

console.log("doo() : "+doo());
// Uncaught Exception: Opps!