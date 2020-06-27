function makeAdder(x) {
  // parameter `x` is an inner variable

  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  }

  return add;
}

/* The reference to the inner add(..) function that gets returned with each call to the outer makeAdder(..) 
is able to remember whatever x value was passed in to makeAdder(..). */

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder(1);
console.log("plusOne(3): "+plusOne(3));


/* Example 2 */
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log("counter1: "+counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log("counter1: "+counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log("counter1: "+counter1.value()); /* Alerts 1 */
console.log("counter2: "+counter2.value()); /* Alerts 0 */

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
