/* 
The bind() method creates a new function that, when called, has its this keyword set 
to the provided value, with a given sequence of arguments preceding any provided 
when the new function is called.


The value to be passed as the this parameter to the target function func 
when the bound function is called. The value is ignored if the bound function 
is constructed using the new operator. 
When using bind to create a function (supplied as a callback) inside a setTimeout, 
any primitive value passed as thisArg is converted to object. 
If no arguments are provided to bind, 
the this of the executing scope is treated as the thisArg for the new function.

*/
function foo(a){
  console.log("a : "+a);
  console.log("this.b : "+this.b);
  return function(){
    console.log("inside return function this.b : "+this.b);
    console.log("inside return function a : "+a);
  };
}

var obj = {
  b : 2
};
var createFunUsingNew = new foo(3);
var newBoundFunc = createFunUsingNew.bind(obj,8);
newBoundFunc(9);
/* var boundFunction = foo.bind(obj,4);
boundFunction(6); // a : 4 , this.b : 2 */
