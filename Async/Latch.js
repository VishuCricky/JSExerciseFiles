/* 
Another concurrency interaction condition you may run into 
is sometimes called a race, but more correctly called a latch. 
It’s characterized by “only the first one wins” behavior.
*/

/* 
Whichever one (foo() or bar()) fires last will not only overwrite the assigned a value from the other, 
but it will also duplicate the call to baz() (likely undesired).
*/

var a;

function foo(x) {
    a = x * 2;
    baz();
}

function bar(x) {
    a = x / 2;
    baz();
}

function baz() {
    console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

/* we can coordinate the interaction with a simple latch, 
to let only the first one through */

/* 
The if (!a) conditional allows only the first of foo() or bar() through, 
and the second (and indeed any subsequent) calls would just be ignored. 
There’s just no virtue in coming in second place!
*/

var a;

function foo(x) {
    if (!a) {
        a = x * 2;
        baz();
    }
}

function bar(x) {
    if (!a) {
        a = x / 2;
        baz();
    }
}

function baz() {
    console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );