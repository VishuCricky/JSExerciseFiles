var a = 1;
var b = 2;

function *foo() {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
}

function step(gen){
    var it = gen();
    var last;

    return function(){
        // whatever is `yield`ed out, just
        // send it right back in the next time!
        last = it.next(last).value;
    }
}

var s1 = step( foo );
s1();
s1(); // 4 , last = 4
s1(); // undefined, last = undefined

console.log("a : "+a);
console.log("b : "+b);
