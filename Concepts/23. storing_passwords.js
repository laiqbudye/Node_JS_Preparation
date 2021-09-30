when we are creating a website, we need to maintain users data. but we cant store user's password in plain text. we need to perform some hashing on that & then save.

encryption
    we can also encrypt plain text password, but in encryption we can also decrypt the encrypted password. it is two way process
    
hashing
    it is one way process. once we perform hashing on users password, there is no way to get that back. hashed password will get stored in DB.
    so in that case how we will compare entered password & stored password.


there is a library called 'bcryptjs' which handles all these tasks.


e.g
  
    const bcrypt = require('bcryptjs');

    const myFunction = async () => {
      
       const password = 'laiq@123';
       const hashedPassword = await bcrypt.hash(password, 8);  // this method returns promise; 8 is the number of rounds hashing will perform on 'laiq@123' string
      
       console.log(password);  //laiq@123
       console.log(hashedPassword);    //sadfhajsdhfjhasdfhjgsdfyg4578ywhfhsuy
       
       const isMatch = await bcrypt.compare(password, hashedPassword);   // this method will compare plain text with hashed password & returns true/false
       console.log(isMatch);
    }
