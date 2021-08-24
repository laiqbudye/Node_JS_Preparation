simple web server that accepts http requests & returns a response:-

    var http = require('http');

    http.createServer(function(req, res){

        res.writeHead(200, {'Content-Type': 'text/plain' });    // text/plain defines the response is in plaintext 
        res.end('Hello World\n');

    }).listen(3000, '127.0.0.1');  // first param is port no. & second is host name


// createServer is function which creates a server & takes a callback function which will get execute whenerver any request comes.

// listen method assigns a port number on which it will listen for incoming requests.



