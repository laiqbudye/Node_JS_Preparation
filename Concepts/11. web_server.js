simple web server that accepts http requests & returns a response:-

    var http = require('http');

    http.createServer(function(req, res){

        res.writeHead(200, {'Content-Type': 'text/plain' });    // text/plain defines the response is in plaintext 
        
        res.end('Hello World\n');   //sends the content of the response to the client and signals to the server that the response (header and content) has been sent completely.

    }).listen(3000, '127.0.0.1');  // first param is port no. & second is host name


// createServer is function which creates a server & takes a callback function which will get execute whenerver any request comes.

// listen method assigns a port number on which it will listen for incoming requests.


------------------------------------------------------------------------------------------------------------

In the previous example we have sent a normal plain text in respose, now we will try to send a HTML in response
    
    index.html
           <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Document</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
            </html> 
       
    
    server.js
    var http = require('http');
    var fs = require('fs');    

    http.createServer(function(req, res){

        res.writeHead(200, {'Content-Type': 'text/html' });    // text/html defines the response is in html (it parses the html & show output on the screen)
        var html = fs.readFileSync(__dirname + '/index.html');   // code flow will wait here till complete file reading has been done
       
        res.end(html);   //sends the content of the response to the client and signals to the server that the response (header and content) has been sent completely.

    }).listen(3000, '127.0.0.1');  // first param is port no. & second is host name


------------------------------------------------------------------------------------------------------------

in the above examples we have used readFileSync() function which is synchronous. i.e it wont go to the next line till it completes file reading.

so if our file size is bigger then it will slow down performance of app. to avoid this we can use pipe 


server.js
    var http = require('http');
    var fs = require('fs');    

    http.createServer(function(req, res){

        res.writeHead(200, {'Content-Type': 'text/html' });   
        
        fs.createReadStream(__dirname + '/index.html').pipe(res);   // here it will read file in chunks & give those chunks to res which is writable stream  

    }).listen(3000, '127.0.0.1');  

