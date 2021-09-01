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
 
    index.html

    <body>
      <form method="POST" action="/person">
        
      </form>  
    </body>
      
    var express = requre('express');
    var app = express();  
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
  
    app.get('/person', urlencodedParser, function(req, res) {
      console.log(req.body.name)       //LAIQ
      console.log(req.body.lastname)   //BUDYE
    })
    var port = pocess.env.PORT || 3000;    

    app.listen(port);
