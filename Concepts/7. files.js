node js allows us to work with files by using fs module.

var fs = require('fs');

greet.txt
  hello world!!
    
example to read file data
  
  it internally uses buffer to read data from a file. it reads data then moves that data into buffer & then process that further.\
  
  var fs = require('fs');

  var data = fs.readFileSync(__dirname + '/greet.txt', 'utf8');   // first param is location of a file, second is character encoding... by default it is utf8
  console.log(data);    // hello world!!

  // readFileSync is a synchronous task ehich means it code flow will wait until it completely reads that file & once reading is complete then it will move to next line.
  // this scenario will helpful when we want to read some config on initial load
  // but in most of the cases it wont be a great choice to wait until file read completes.

to avoid above scenario we have one another function,
  
  var fs = require('fs');

  var data = fs.readFile(__dirname + '/greet.txt', function(err, data) {                // first param is location of a file, second is a callback function which will get execute once file reading completes
    console.log(data);        // returns a buffer -> <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21 21 21>
    console.log(data.toString())    // it will convert buffer to a string hello world!!!
  });  
  console.log(data); 
  
  
  // readFile is ASynchronous way of file reading, it wont stop code flow. (it will move to next line for execution)
  // once the reading completed then it executes a callback function.
  // callback function takes two args. 1. err - error   2. data - actual data it got from file in the form of buffer
  // it is more preferable as compared to readFileSync()




