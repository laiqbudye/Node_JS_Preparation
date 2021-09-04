What is Node JS?
  open-source
  cross-platform
  single threaded & asynchronous (non-blocking)
  it runs JS code outside a web browser
  JS runtime enviornment that runs on V8 engine (V8 also written in c++)   V8 is responsible to convert Js code to machine code.
  node js is written in C++


Node js Features
  1. Very fast (built on google's V8 engine which is very fast in code execution)
  2. Single threaded but highly scalable
  3. No buffering (node js apps never buffers as it always returns data in chunks)
  4. cross platform
  5. asynchronous
  

CLI:- (Command Line Interface) - A utility to type commands to your computer rather than clicking.
  e.g Bash on linux, Command prompt on windows, Terminal on Mac

  
IMP:-
Node Js is a server technology, that is designed to be able to use JS to write server code
  
  
Machine Code:- our code gets converted to machine code which is then read by the processor.


node js is non-blocking 

blocking vs non-blocking
  lets understand this with an example
     there is waiter & cheff at hotel. whenever any customer comes waiter takes an order & submit it to cheff, then cheff starts working on that.
     in the meantime if any new customer comes then also waiter takes order & submit it to cheff. (this is non-blocking way)
     
     in case of blocking, the waiter will not take order from new customer until current order gets prepared & delivered to the customer.
     
     in the same way node also takes multiple requests at a same time, store them in an event loop & process them asynchronously.
 

     
     
Single vs Multi thread (node is single threaded)
     in a multi thread application every request is handled by different thread. all threads runs parallely.
     in a single thread application only once thread handles all requests. (in node it handles all requests asynchronously)
    
