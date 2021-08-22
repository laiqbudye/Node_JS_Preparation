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
Scenario 1:-

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


-----------------------------------------------------------------------------------------------------
   
Scenario 2:- 
   as we saw in the Scenario 1 the newly created obj gets access to props & methods of both Greetr & EventEmitter function.
   but in some case if EventEmitter got updated with some manually added props or methods then with above example our new object wont get those new methods.
   to solve this issue we can follow the below approach.


app.js

var EventEmitter = require('events');   // nodejs in built event emitter
var util = require('util');             // nodejs in built utils pkg which includes common utility methods 


function Greetr() {
   EventEmitter.call(this);     // here this is blank obj that gets created with new keyword, & same this is pointing to eventemitter, so it will get newly addded props inside it 
   this.greeting = 'Hello World!';    // also greeting prop will get added to same this obj... hence it is complete inheritance we can say
}

util.inherits(Greetr, EventEmitter);  

var greeter1 = new Greetr();

greeter1.on('greet', function() {    // here 'on' is a method from events (EventEmitter) pkg, but as we has inherited Greetr from EventEmitter we can use that with greeter1..... it will search it on prototype chain & will find out on eventemitters prototype
   console.log("Someone greeted!");
})

greeter1.emit('greet');
   
   
-----------------------------------------------------------------------------------------------------
   
 Scenario 3:- 
    Same example with Classes
    
      var EventEmitter = require('events');   // nodejs in built event emitter

      class Greetr extends EventEmitter {
         super();               // invoking parent class constructor.... same as EventEmitter.call(this); 
         this.greeting = 'Hello World!';
      }

      
      var greeter1 = new Greetr();

      greeter1.on('greet', function() {    // here 'on' is a method from events (EventEmitter) pkg, but as we has inherited Greetr from EventEmitter we can use that with greeter1..... it will search it on prototype chain & will find out on eventemitters prototype
         console.log("Someone greeted!");
      })

      greeter1.emit('greet');
   
   
   
   
   
 
