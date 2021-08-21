Module-
  is a re-usable block of code 
  
  Js didnt have this before (there was a workaround but modules were not officially supported)


Functions are first class citizens in JS
  1. We can assign a function to a variable
  2. We can pass one function as a param to another function 
  3. We can return a function from a function
Considering all these, Functions are first class citizens in JS.



e.g

greet.js
  var greet = function() {
    console.log("Hello")
  }

 module.exports = greet;   // exports greet from this file which can be imported in any other file



app.js
  var greet = require('./greet');    // require function provided by nodeJS which will return module.exports from specified file.. ie. greet function in this example
  greet();    // Hello

