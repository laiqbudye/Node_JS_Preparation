API (application programming interface)


create a web server which will return JSON data to client


    var http = require('http');

    http.createServer(function(req, res){

        res.writeHead(200, {'Content-Type': 'application/json' });    // appplication/json specifies it is going to return json data
        
        var data = {                        // an object we need to send in response
            firstName: 'laiq',
            lastName: 'budye'
        }   
       
        res.end(JSON.stringify(data));    // here if we pass only data then it will throw an error saying The "chunk" argument must be one of type string or Buffer

    }).listen(3000, '127.0.0.1');  


so whenever it hits 'http://localhost:3000' it wll return {"firstName":"laiq","lastName":"budye"}


Serialization -
  is a process of translating an object into a format that can be stored or transferred.
  e.g taking an object & convert it into JSON string to send across internet
  
  
DeSerialization - 
  is opposite of serialization.
  e.g taking a JSON string & convert into an object.
  
  
  
