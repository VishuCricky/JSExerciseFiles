var myObj = {
  // define a getter for `b`
  get b(){
    return 2;
  }
}

Object.defineProperty(myObj, 'c', {

  // define a getter for `c`
  get : function(){
    return this.b * 2;
  },
  enumerable : true
});

console.log("myObj.b: "+myObj.b); // 2
console.log("myObj.c: "+myObj.c); // 4

/* Example 2 */
/* In this example, we actually store the specified value 2 of the assignment 
([[Put]] operation) into another variable _a_. The _a_ name is purely 
by convention for this example and 
implies nothing special about its behavior—it’s a normal property like any other. */
console.log("============== Example 2 ==============");

var testObj = {
  // define a getter for `a`
  get a() {
      return this._a_;
  },

  // define a setter for `a`
  set a(val) {
      this._a_ = val * 2;
  }
};

testObj.a = 2;

testObj.a; // 4
console.log(Object.prototype.hasOwnProperty.call(testObj,"a"));