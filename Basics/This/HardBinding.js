/* Example 1 */
function foo(){
  console.log(this.a);  
}

var obj = {
  a : 2
};

var bar = function(){
  foo.call(obj);
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// hard-bound `bar` can no longer have its `this` overridden
//bar.call( window ); // 2

/* Example 2*/

console.log("=======Example 2 execution starts=======");
function boo(something){
  console.log(this.a,something);
  return this.a+something;
}

var testObj = {
  a : 1
}

var baz = function(){
  return boo.apply(testObj,arguments);
}

var d = baz(3);
console.log("d: "+d);

/* Example 3 */
console.log("=======Example 3 execution starts=======");
function choo(something) {
  console.log( this.a, something );
  return this.a + something;
}

// simple `bind` helper
function bind(fn, obj) {
  return function() {
      return fn.apply( obj, arguments );
  };
}

var bindObj = {
  a: 2
};

var saz = bind( choo, bindObj );

var e = saz( 3 ); // 2 3
console.log("e: "+ e ); // 5

/* Example 4 */
console.log("=======Example 4 execution starts=======");
function doo(something) {
  console.log( this.a, something );
  return this.a + something;
}

var dooObj = {
  a: 2
};

var dooBar = doo.bind( dooObj );

var f = dooBar( 3 ); // 2 3
console.log("f: "+ f ); // 5