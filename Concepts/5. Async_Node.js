JS is synchronous.

Synchronous - executing one line at a time.

whereas, Node JS is Asynchronous, i.e executing more than one line at a time.

CALLBACK:- A function passed to some other function, which will be invoked at some point.


Inside Node we have,
  
  1. V8 - is a JS engine which is synchronous, i.e executing one line at a time.
  
  2. libuv - this one written specifically to deal with things happening lower level ie. events occuring in the O.S
             libuv connects OS by requesting something e.g to open a file or to download some resource from internet.
             libuv contains a queue of events that have completed.
             also libuv contains event loop which constantly checks queue that something has happened (this process does simultanously while V8 is running)
             once an event or task completed by OS, it places that on event queue then event loop will process that task & execute callback for that task.
    
             
             
             
  Non-Blocking  - doing other things without stopping your program from running
 
