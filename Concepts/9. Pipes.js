Pipes
  connecting two streams by writing to one stream what is being read from another.
  
  lets say we have two streams 1. readable 2. writable
  
  readble is reading some data & writable is writing some data.
  
  so we can read data from readable stream & pass same data to writable stream using PIPE.

  
  example:- copy contents from one file to another file using pipe.
    
    var fs = require
    
    var readable = fs.createReadStream(__dirname + '/greet.txt');
    
    var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

    readable.pipe(writable);      // here pipe reads from readable stream & pass it to writable stream. (this way it will copy contents from one file to another)
    
      
we can make chain of pipe also. we only can use pipe command with readable stream
e.g
    a.pipe(b)    // here a is readable stream & b is writable
    a.pipe(b).pipe(c)     // here a is readable, b is duplex(readable/writable) & c is writable
