we can pass query parameters in URL & can extract those params on server side(express).

query params - values we send from browser to server in URL (localhost:3000/api?name=laiq&lastname=budye)

how to extract data from GET request
   
    http://localhost:3000/person?name=LAIQ&lastname=BUDYE

 var express = requre('express');

  var app = express();  // here express returns a function & store it in app variable.

  app.get('/person', function(req, res) {
    console.log(req.query.name)       //LAIQ
    console.log(req.query.lastname)   //BUDYE
  })
  var port = pocess.env.PORT || 3000;    // process is a global object provided by node

  app.listen(port);




how to extract data from POST request

  it is not straight forword as extracting data from GET request  
  to extract data from post request we need to use middlewares like body-parser

  to install:- npm install body-parser
 
   1. bodyParser.urlencoded() - it returns a middleware which only parses urlencoded bodies & populate parsed data on req.body object. (it creates new body obj & adds that on req)
   
   2. bodyParser.json() - it returns a middleware which only parses json & populate parsed data on req.body object.

    index.html

    <body>
      <form method="POST" action="/person">
        First Name: <input type='text' id='firstname' name='firstname' /> <br />
        Last Name: <input type='text' id='lastname' name='lastname' /> <br />
        <input type='submit' value='submit' />
      </form>  

      <!-- sending json data>
         <script>
         $.ajax({
            type: "POST",
            url: "/personJson",
            data: JSON.stringify({firstname: 'Jane', lastname: 'doe'}),
            dataType: 'json',
            contentType: 'application/json'
         })
       </script>
      <-->
    </body>
      
    var express = requre('express');
    var app = express();  
    var urlencodedParser = bodyParser.urlencoded({ extended: false });   //extended: false => parsing the URL-encoded data with the querystring library   extended: true => with the qs library
    var jsonParser = bodyParser.json(); 

    app.post('/person', urlencodedParser, function(req, res) {   // when user click on submit btn this function will get triggered
      console.log(req.body.firstname)   //LAIQ
      console.log(req.body.lastname)   //BUDYE
    })

    app.post('/personJson', jsonParser, function(req, res) {   // when user click on submit btn this function will get triggered
      console.log(req.body.firstname)   //Jane
      console.log(req.body.lastname)   //doe
    })
    var port = pocess.env.PORT || 3000;    

    app.listen(port);
