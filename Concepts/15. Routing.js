Routing
  refers to determining how an application responds to a client request to a particular endpoint.
  each route can have one or more handler functions, which are executed when the route is matched.
  by default all requests are get requests. for other type of requests we need to set that request type explicitly. e.g app.post(), app.delete(), app.put(),
  
Route examples

var express = requre('express');

var app = express();  
var port = pocess.env.PORT || 3000;  

app.get('/', function(req, res) {          // URL: localhost:3000/
  res.json({msg: 'hello wold'});          
})


app.get('/api', function(req, res) {        // URL: localhost:3000/api
  res.json({firstname: 'Laiq', lastname: 'Budye'});        
})

app.get('/person/:id', function(req, res) {.........................        // URL: localhost:3000/person/123456
  console.log(req.params.id);                      // this is a way to extract query params from URL, it will return 123456
  res.json({firstname: 'Laiq', lastname: 'Budye'});        
})

app.listen(port);
