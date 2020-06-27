
function Foo(name){
  this.name = name;
}

function Bar(lable){
  this.lable = lable;
}

/* Pre ES6 */
// throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );


/* post ES6 */
// modifies existing `Bar.prototype`
Object.setPrototypeOf(Bar.prototype, Foo.prototype);