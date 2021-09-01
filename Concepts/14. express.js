as we have seen previously that we can create a server using node js but express makes it more simple than just a node.

to install express
  -  npm i express --save
  

express is just a pkg which wraps JS code.

e.g
var express = requre('express');

var app = express();  // here express returns a function & store it in app variable.
var port = pocess.env.PORT || 3000;    // process is a global object provided by node

app.listen(port);  // as we know functions are special callable objects, express have added props & methods on it.



Enviornment Variables
  global variables specific to the enviornment(server) our code living in.
  
  
HTTP methods
  specifies the type of action the request wishes to make.
  e.g GET, POST, DELETE, PUT

e.g
var express = requre('express');

var app = express();  
var port = pocess.env.PORT || 3000;  

app.get('/', function(req, res) {          // whenever URL matches with this endpoint, this function will get execute   
  res.json({msg: 'hello wold'});          // with express we dont need to mention content type explicitly, express on its own figures it out
})


app.get('/api', function(req, res) {        
  res.json({firstname: 'Laiq', lastname: 'Budye'});        
})

app.listen(port);


