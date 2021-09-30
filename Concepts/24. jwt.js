JWT - Json Web Token

when user logs into any portal then he gets one authentication token from system. this token can be used for subsequent requests.

JWT token consists of 3 parts:-
  1. header  (algo & token type)
  2. payload  (data)
  3. signature
  
https://jwt.io/ is a best site to verify or generate jwt tokens for testing.
  
  
 there is a npm pkg named as 'jsonwebtoken' which is useful to generate & verify jwt tokens.
 
 e.g

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh', {expiresIn: '1 week'});
console.log(token);  //https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                    // in the above o/p you can see it is consists of 3 parts

var isVerified = jwt.verify(token, 'shhhhh'); // it takes jwt token & secret key which was used while creating jwt token

arguments are as below,
    1. is a data that we want to encode in JWT
    2. is a secret key to generate JWT
    3. options - which takes expiration time & other options
