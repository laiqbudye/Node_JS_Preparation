Middleware
  is a code that sits between two layers of software.
  in the case of express, sitting between the request & response.


Static files
  files that are not dynamic
  in other words, not processed by code in any way. e.g our HTML, css & image files comes under static files.



to apply middleware to our code, we need to use app.use() function.

e.g
  var express = requre('express');

  var app = express();  // here express returns a function & store it in app variable.
 
  app.use('/', function(req, res, next) {       // this is a middleware which gets invoked on every request & logs request URL
    console.log("Request URL is:- " + req.url);
    next();          // this statement invokes next middleware if there is any
  })

  var port = pocess.env.PORT || 3000;    // process is a global object provided by node
  
  app.listen(port);  // as we know functions are special callable objects, express have added props & methods on it.



Using built-in cookie parser

  var express = require('express')
  var cookieParser = require('cookie-parser')

  var app = express()
  app.use(cookieParser())     // we are using cookieparser as middleware

  app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })

  app.listen(8080)
