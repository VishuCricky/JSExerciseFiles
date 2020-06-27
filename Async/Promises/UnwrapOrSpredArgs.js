

/* 
a bit tricky... but... stick with me here.

Function.apply(..) is the same utility that functions inherit, 
like fn.apply(..), but it's the generic one that isn't yet bound to a 
specific function (via its `this`).

that utility takes as its first parameter a `this` to use.

the bind(..) utility ALSO takes a `this` as its first parameter, 
and it creates a bound function (as well as any subsequent parameters being partially applied).

Function.apply.bind(fn,null)

would be like

fn.apply(null)

so what we're basically doing is having `spread(..)` return that 
function that's already preset to do fn.apply(null) but be waiting 
for a parameter (an array of args) to be passed in, kinda like:

function spread(fn) {
    return function forArgs(args) {
        return fn.apply(null,args);
    };
}

so you do:

function f(x,y,z) { .. }
g = spread(f);
g([1,2,3])

and that array of [1,2,3] gets spread out into the x,y,z params.
*/

function spread(fn){
  return Function.apply.bind(fn,null);
}

/* 
  Function.apply.bind(fn,null) i.e fn.apply(null)
  function spread(fn){
    return function forArgs(args){
      return fn.apply(null,args);
    };
  }
*/

function getY(x) {
  return new Promise( function(resolve,reject){
      setTimeout( function(){
          resolve( (3 * x) - 1 );
      }, 100 );
  } );
}

function foo(bar,baz) {
  var x = bar * baz;

  // return both promises
  return [
      Promise.resolve( x ), //200
      getY( x ) // 599
  ];
}

Promise.all(
  foo( 10, 20 )
)
.then(
  spread( function(x,y){
      console.log( x, y );    // 200 599
  } )
)

