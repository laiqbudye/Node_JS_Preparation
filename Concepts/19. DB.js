we can connect sql as well as non-sql databases with Javascript (node js)

Connection with Mysql
    to make connection between node & mysql we need to install mysql pkg from npm registry.
    
    to install:- npm i mysql
    
    
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'test',      // username of mysql acnt
      password : 'test',      // password of mysql acnt
      database : 'my_db'      // database name on which we want to perform operations
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {    // this is error first function as it receives first arg as an error
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);        // here, it will return values from DB in results obj
    });

    connection.end();     // ending connection once we are done with operations





Connection with MongoDB
    to make connection between node & mongoDB we need to install mongoose pkg from npm registry.

    to install:- npm i mongoose
    
    
     const mongoose = require('mongoose');

     const connectDB = async () => {
     try {
         await mongoose.connect('URL OF DB');      //here we need to put local mongo url or if we use cloud mongo then cloud's mongo url
         console.log("Database Connected...")
     } catch (error) {
        console.error(error.message);
        //exit process due to fail
        process.exit(1);        
     }
 }

     
     Defining a Model
          //Models are defined through the Schema interface.

        const Schema = mongoose.Schema;

        const BlogPost = new Schema({
          title: String,
          body: String,
          date: Date
        });










