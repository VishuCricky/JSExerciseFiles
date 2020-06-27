function Foo(name){
  this.name = name;
}

Foo.prototype.myName = function(){
  return this.name;
}

function Bar(name,label){
  Foo.call(this, name);
  this.label = label;
}

Bar.prototype = Object.create( Foo.prototype );

var a = new Bar("a", "obj a");

console.log("a.name: "+ a.name);
console.log("a.label: "+ a.label);



