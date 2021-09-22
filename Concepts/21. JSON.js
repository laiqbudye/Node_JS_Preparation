JSON - Javascript Object Notation.

it contains key value pairs.

e.g
  WAP to read user data from 1-json.json file 
  
  1-json.js
    const fs = require('fs');
  
    const dataBuffer = fs.readFileSync('1-json.json');   // it returns file contents in buffer 
    const dataJson = dataBuffer.toString();
    
    const user = JSON.parse(dataJson);  // here we will get data in object

    user.name = 'Laiq';
    user.age = 25

    //now save the updated data to same file
    
    const userJson = JSON.stringify(user);
    fs.writeFileSyc('1-json.json', userJson);   // it will write/overwrite updated user data to the same file
