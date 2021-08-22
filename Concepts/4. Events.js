What is Event?
   something that has happened in our app that we can respond to.

there are two type of events in nodeJs
  1. System Events 
        - events coming from computer system like I finished reading a file, a file is open, I have received data from internet & other things like that JS doesnt have.
        - libuv library provides all these.

  2. Custom Events
        - they are inside JS core
        - they are not from libuv library.



Event Listener:-
      - the code that responds to an event.
      - in JS case, the listener will be a function.
      - when an event happens, this function/listener will get invoked.

--------------------------------------------------------------------------------------------

Sample event emitter is as follows:-
   
   emitter.js

function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}


module.exports = Emitter;



app.js

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {             // it is a listener which will get execute when it listens greet event
    console.log("Somewhere, someone said hello");
})


emtr.on('greet', function() {    
    console.log("A greeting occured!");
})

console.log("Hello");

emtr.emit('greet');      // it emits(fires/broadcast) the event

---------------------------------------------------------------------------------------------------------
   
If we want to use nodeJs built-in event emitter then we need import it as below:-
   
   var Emitter = require('events');     // there is built-in events.js file which handles events 


-----------------------------------------------------------------------------------------------------
   
   
INHERITING FROM EVENT EMITTERS

app.js

var EventEmitter = require('events');   // nodejs in built event emitter
var util = require('util');             // nodejs in built utils pkg which includes common utility methods 


function Greetr() {
   this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);  // inherits function stating that whatever object created using Greetr function constructor will have access to all props & methods of EventEmitter

var greeter1 = new Greetr();

greeter1.on('greet', function() {    // here 'on' is a method from events (EventEmitter) pkg, but as we has inherited Greetr from EventEmitter we can use that with greeter1..... it will search it on prototype chain & will find out on eventemitters prototype
   console.log("Someone greeted!");
})

greeter1.emit('greet');

greeter1.emit('greet', data);   // way to send data as well while emitting the event, this data will get as i/p for function written inside greeter1.on()
