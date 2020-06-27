/* Example 1 */
var x = 1;

function *foo(){
  x++;
  yield; // pause!
  console.log("x :"+x);
}

function bar(){
  x++;
}

foo();

var it = foo(); // constructs the iterator object to control the generator execution

// start foo() here
it.next();  // starts the generator execution, executes `x++` and pauses at yield statment
x; // 2
bar();
x; // 3
it.next(); // x : 3 , it’s the second next(..) call that fulfills the first paused yield expression

/* Example 2 */
function *boo(x){
  var y = x * (yield);
  return y;
}

var itBoo = boo(6);
itBoo.next();
var resBoo = itBoo.next(7);
console.log("resBoo.value : "+resBoo.value);

/* 
First, we pass in 6 as the parameter x. 
Then we call it.next(), and it starts up *foo(..).

Inside *foo(..), the var y = x .. statement starts to be processed, 
but then it runs across a yield expression. At that point, it pauses *foo(..) 
(in the middle of the assignment statement!), 
and essentially requests the calling code to provide a result value for the yield expression. 
Next, we call it.next( 7 ), which is passing the 7 value back in to be that result of the paused yield expression.

So, at this point, the assignment statement is essentially var y = 6 * 7. 
Now, return y returns that 42 value back as the result of the it.next( 7 ) call.
*/
