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
  res.send("Hello");  // it returns string in response to client
  
  res.send("<h1> Hello </h1>");     // it returns HTML to client
  
  res.send({
    firstname: 'Laiq',    // here express automatically strigify our object & send it to client i.e {"firstname":"Laiq","lastname":"Budye"}
    lastname: 'Budye'
  });  
})

app.listen(port);


-------------------------------------------------------------------------------------------------------------------
  
  
How to serve static assets (assets from public folder) using express

both these variables comes with node js by default

console.log(__dirname);   // this returns current directory path  E:\STUDY DATA PROFESSIONAL\Node JS Excercises\static_assets
console.log(__filename);  // this returns current file path  E:\STUDY DATA PROFESSIONAL\Node JS Excercises\static_assets\index.js
console.log(path.join(__dirname, '/public'));  // this joins the path with directory path   E:\STUDY DATA PROFESSIONAL\Node JS Excercises\static_assets\public


e.g

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));  // xpress static is in built middleware which serves static files
console.log(path.join(__dirname, '/public'));     // E:\STUDY DATA PROFESSIONAL\Node JS Excercises\static_assets\public

console.log(__dirname);
console.log(__filename);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});


in the above example when user hits localhost:3000/ from browser it will show contents from public/index.html file.

