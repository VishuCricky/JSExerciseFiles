// ajax(..) is some arbitrary Ajax function given by a library
var data = ajax( "http://some.url.1" );

console.log( data );
// Oops! `data` generally won't have the Ajax results

/* 
You’re probably aware that standard Ajax requests don’t complete synchronously, 
which means the ajax(..) function does not yet have any value to return back 
to be assigned to the data variable. If ajax(..) could block until the response 
came back, then the data = .. assignment would work fine.

But that’s not how we do Ajax. 
We make an asynchronous Ajax request now, 
and we won’t get the results back until later.

The simplest (but definitely not only, or necessarily even best!) way of 
“waiting” from now until later is to use a function, 
commonly called a callback function:

*/

/* Callback function example */

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", function myCallbackFunction(data){

    console.log( data ); // Yay, I gots me some `data`!

} );