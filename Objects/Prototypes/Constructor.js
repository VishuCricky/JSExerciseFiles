function Foo() {
  // ...
}

Foo.prototype.constructor === Foo; // true

var a = new Foo();
a.constructor === Foo; // true

/* Example 2 */
function boo(){
  console.log("testing!");
}

var b = new boo();

console.dir(b);
console.dir("b.constructor : "+b.constructor);
console.dir("b.constructor.name : "+b.constructor.name);
b.constructor();


/* Example 3 */
function Choo() {}

var a1 = new Choo();

Choo.prototype.constructor = function Gotcha(){};

a1.constructor; // Gotcha(){}
a1.constructor.name; // "Gotcha"

a1; // Choo {}