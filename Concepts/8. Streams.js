Stream
  is just a sequence of pieces of data.
  
Chunks
  data that is broken up into small pieces is called chunks
  a piece of data being sent through stream
  

behind the scenes Stream inherits EventEmitter. i.e stream has access to all methods & props of EventEmitter.

Stream types:-
   1. readable - can only read data that coming through stream. cant send any data.
   
   2. writable - can only send data to the stream. cant read data
   
   3. duplex - can do both
   
   4. transform - allows to change data as it moves throgh the stream
   
   

Example to copy contents from one file to another file

  var fs = require('fs');
  
  var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});   // it will create a readable stream which allows to read data coming through stream
    // highWaterMark is a buffer size, in the above eg its 32kb    
    // so if our total content size is greater than 32kb then it will return more than 1 chunk ele it will return all content in a single chunk

  
  var writable = fs.createWriteStream(__dirname + '/greet.txt');

  readable.on('data', function(chunk) {                       // data is an event which gets called when chunk of data is received.
    console.log(chunk);               // it will print chunk of data
    writable.write(chunk);
  });

