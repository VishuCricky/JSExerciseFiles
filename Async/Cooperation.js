var res = [];

// `response(..)` receives array of results from the Ajax call
function response(data) {
    // add onto existing `res` array
    res = res.concat(
        // make a new transformed array with all
        // `data` values doubled
        data.map( function(val){
            return val * 2;
        } )
    );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );

/* 
If "http://some.url.1" gets its results back first, 
the entire list will be mapped into res all at once. 
If it’s a few thousand or less records, this is not generally a big deal. 
But if it’s, say, 10 million records, that can take a while to run 
(several seconds on a powerful laptop, much longer on a mobile device, etc.).

While such a “process” is running, nothing else in the page can happen, 
including no other response(..) calls, no UI updates, 
not even user events like scrolling, typing, button clicking, and the like. 
That’s pretty painful.

So, to make a more cooperatively concurrent system, 
one that’s friendlier and doesn’t hog the event loop queue, 
you can process these results in asynchronous batches, 
after each one yielding back to the event loop to let other waiting events happen 

*/

/* Example 2 */
var res = [];

// `response(..)` receives array of results from the Ajax call
function response(data) {
    // let's just do 1000 at a time
    var chunk = data.splice( 0, 1000 );

    // add onto existing `res` array
    res = res.concat(
        // make a new transformed array with all
        // `chunk` values doubled
        chunk.map( function(val){
            return val * 2;
        } )
    );

    // anything left to process?
    if (data.length > 0) {
        // async schedule next batch
        setTimeout( function(){
            response( data );
        }, 0 );
    }
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );