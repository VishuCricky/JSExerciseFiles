/* the call-site uses the obj context to reference the function, 
so you could say that the obj object “owns” or “contains” the function reference 
at the time the function is called.

Whatever you choose to call this pattern, at the point that foo() is called, 
it’s preceded by an object reference to obj. 
When there is a context object for a function reference, 
the implicit binding rule says that it’s that object that should be used 
for the function call’s this binding. 
Because obj is the this for the foo() call, this.a is synonymous with obj.a */

function foo(){
  console.log(this.a);
}

var obj = {
  a : 2,
  foo : foo
};

obj.foo(); // 2


/* Only the top/last level of an object property reference 
chain matters to the call-site. */

function boo() {
  console.log( this.a );
}

var obj2 = {
  a: 42,
  boo: boo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.boo(); // 42