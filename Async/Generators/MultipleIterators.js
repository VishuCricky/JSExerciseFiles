function *foo(){
  var x = yield 2;
  console.log("x : "+x);
  z++;
  console.log("z : "+z);
  var y = yield(x*z);
  console.log(x,y,z);
}

var z = 1;

var it1 = foo();
var it2 = foo();

var val1 = it1.next().value;
console.log("val1 : "+val1);
var val2 = it2.next().value;
console.log("val2 : "+val2);

val1 = it1.next(val2 * 10).value;
console.log("val1 : "+val1);
val2 = it2.next(val1 * 5).value;
console.log("val2 : "+val2);

it1.next( val2 / 2 );                   // y:300
                                        // 20 300 3
it2.next( val1 / 4 );                   // y:10
                                        // 200 10 3




