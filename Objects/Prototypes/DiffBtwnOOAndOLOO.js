/* Example 1 
OO coding style
*/

function Foo(who){
  this.me = who;
}

Foo.prototype.identity = function(){
  return "I am " + this.me;
};

function Bar(who){
  Foo.call(this, who);
}

Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function(){
  console.log("Hello, "+this.identity()+".");
};

var b1 = new Bar("vishnu");
b1.speak();
var b2 = new Bar("priya");
b2.speak();


/* Example 2 
OLOO coding style
*/

var choo = {
  init : function(who){
    this.me = who;
  },
  identify : function(){
    return "I am "+ this.me; 
  }
};

var boo = Object.create(choo);
boo.speak = function(){
  console.log("Hello, "+ this.identify()+ ".");
}

var sachin = Object.create(boo);
sachin.init("tendulkar");
sachin.speak();