function foo (){
  return 42;
}

foo.bar = 'learn JS!';

typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"