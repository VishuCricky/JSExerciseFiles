/* Dedicated Worker URL */

var w1 = new Worker("http://some.url.1//mycoolworker.js");

w1.addEventListener("message",function(evt){
  //evt.data
});

w1.postMessage("something cool to say");

 /* 
 Inside the worker the messaging is totally symmetrical
 */

 //   mycoolworker.js
 addEventListener("message",function(evt){
   // evt.data
 });

 postMessage("a really cool reply");

 /* 
 Inside the Worker, you do not have access to any of the main program’s resources. 
 That means you cannot access any of its global variables, nor can you access the page’s DOM 
 or other resources. Remember: it’s a totally separate thread.

You can, however, perform network operations (Ajax, WebSockets) and set timers. 
Also, the Worker has access to its own copy of several important global variables/features, 
including navigator, location, JSON, and applicationCache.
 */

 // inside the Worker
importScripts( "foo.js", "bar.js" );

/* 
These scripts are loaded synchronously, which means the importScripts(..) call 
will block the rest of the Worker’s execution until the file(s) are finished loading and executing.
*/

/* 
Shared Worker
*/

var sw1 = new SharedWorker("http://some.url.1/mycoolWorker.js");

w1.port.addEventListener( "message", handleMessages );

// ..

w1.port.postMessage( "something cool" );

/* 
Port connection must be initialized
*/

w1.port.start();


// inside the shared Worker
addEventListener( "connect", function(evt){
  // the assigned port for this connection
  var port = evt.ports[0];

  port.addEventListener( "message", function(evt){
      // ..

      port.postMessage( "" );

      // ..
  } );

  // initialize the port connection
  port.start();
} );