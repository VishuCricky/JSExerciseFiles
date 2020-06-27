function foo() {
  var a = 1;
  d = 5;
  function bar() {
    var b = 2;

    function baz() {
      var c = 3;

      console.log(a,b,c);
    }
    baz();
    console.log(a,b+"=====inside Fun baz");
  }
  bar();
  console.log(a+"=====inside Fun foo");
}

foo();
console.log(d+"=====value d");