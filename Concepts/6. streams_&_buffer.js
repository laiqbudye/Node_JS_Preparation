Buffer 
  a temporary holding spot for data being moved from one place to another.
  its limited in size.
  buffer is there to simply allow us gather some data & move it along.
  & generally this data is coming & moving through STREAMS.
  
  
Stream
  A sequence of data made available over time.
  
  
  
Binary Data
  A data stored in binary  (sets of 1s & 0s).
  
  
Character Set
  a representation of characters as numbers
  each character gets a number. Unicode & ASCII are character sets.
  e.g for a word hello - h:- 104, e:- 101, l:- 108, l:- 108, o:- 111  (this is unicode character set)  
  


---------------------------------------------------------------------------------------------------------
BUFFER example

Buffer is made availale globally by node JS, hence we dont need to import it from any pkg.
its just like Date obj in JS which is gloabally available in JS


var buf = new Buffer('Hello', 'utf8');  hello is string value, we can also mention buffer size as well & utf8 is encoding type... if we dont give second arg then default is utf8 only

console.log(buf);       // <Buffer 48 65 6c 6c 6f>

buf.write('wo');           // as our initial value for buffer is of 5 letters, then writing on it will overwrite first two characters
console.log(buf.toString());   // wollo
 
---------------------------------------------------------------------------------------------------------
  
  in latest version of JS we have TYPED ARRAYS which can deal with binary data.
  
  var buffer = new ArrayBuffer(8);    // 8 is bits, 8bits = 1 byte
  var view = new Int32Array(buffer);   // here we are converting our buffer in Int32Array representation (Integer with 32 bits)
  
  view[0] = 5;
  view[1] = 15;

  console.log(view);  //Int32Array [ 5, 15 ]
