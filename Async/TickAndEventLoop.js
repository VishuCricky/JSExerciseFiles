// `eventLoop` is an array that acts as a queue
// (first-in, first-out)
var eventLoop = [];
var event ;

while(true){
  // perform a "tick"
  if(eventLoop.length > 0){
    // get the next event in the queue
    event = eventLoop.shift();
    // now, execute the next event
    try{
      event();
    }
    catch(err){
      reporterr(err);
    }
  }
}

/* As you can see, there’s a continuously running loop represented by the while loop,
 and each iteration of this loop is called a tick. For each tick, 
 if an event is waiting on the queue, it’s taken off and executed. 
 These events are your function callbacks. */