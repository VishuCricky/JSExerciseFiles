var res = {};

function foo(results){
  res.foo = results;
}

function boo(results){
  res.boo = results;
}

ajax("http://some.url.1", foo);
ajax("http://some.url.2", boo);