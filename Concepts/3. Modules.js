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




there are 3 types of modules in node js.
  1. core modules
      these are provided by node itself. e.g fs module to work with file system
      
      const fs = require('fs');    // this fs module is a core module of node js
      fs.writeFile('notes.txt', 'Hello World');


  2. modules that we create in different files
      these are developer created modules to achieve some functionality that we can import from one file to another file.
      
      e.g
         utils.js
            const name = "LAIQ";
            module.exports = name;

        index.js
            const n = require('./utils.js');
            console.log(n);     // LAIQ

    
  3. third party modules (npm pkgs)
      to import from 3rd party pkgs, first we need to install that pkg using npm
          - npm i validator     // a pkg which validates given string
          
      index.js
         const validator = require('validator');
         console.log(validator.isEmail('laiqbudye@gmail.com'));

        
    
