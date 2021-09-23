mongodb is noSQL database.

database
    in mongodb, database contains one or more collections.
    
collection
    collection contains one or more documents
    
documents
    mongodb saves data records as BSON douments. Binary representation of JSON documents.
    e.g
      {
        name: 'Laiq',        <---- key/value pair
        age: 26,
        city: 'rtn'
      }
      


ObjetctId:- 
when we create/insert any data in mongodb then mongo automatically assign one random id(objectid) to that data under _id field/key.
note:- if we provide object id while inserting data then mongo will take provided objectid 
e.g
    {
        ObjectId("507f1f77bcf86cd799439011")   // <---- this is added by mongo
        name: 'Laiq',
        age: 26,
        city: 'rtn'
      }

object id is 12-byte in size consist of,
  1. 4-byte - timestamp value, measured in seconds since the unix epoch
  2. 5-byte - random value
  3. 3-byte - incrementing counter, initiliazed to a random value
  
  

  
CRUD with mongodb

1. create/Insert
    inserOne - insert only one document
    
    db.products.insertOne( { item: "box", qty: 20 } );   // products is collection name

  
  


example in node js

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {    // useNewUrlParser applies new url parser to parse url as old one is deprecated now
  if(error){
    return console.log("Unable to connect to database");
  }
  
  const db = client.db(databaseName);
  
  // inserting single record
  db.collection('users').insertOne({   // every method return promise if callback is not provided
    name: 'Laiq',
    age: 25
  }, (error, result) => {      // here we have provided callback fn so it wont return promise now
       if(error){
        return console.log("Unable to insert to DB");
      }
      
      console.log(result.ops);
  });
  
  
  
 // inserting multiple records
    db.collection('users').insertMany([
           {   // every method return promise if callback is not provided
            name: 'Laiq',
            age: 25
          },
          {
            name: 'Sahir',
            age: 24
          }
    ]).then(result => {        // here we didnt add callback explictly so by default it has returned promise 
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
})




2. read data 
    find() - Selects documents in a collection and returns a cursor to the selected documents. 
             
    
    findOne() - Returns one document that satisfies the specified query criteria on the collection. 
                If multiple documents satisfy the query, this method returns the first document according to the natural order



 3. update data
    updateMany() - Updates all documents that match the specified filter for a collection.

    updateOne() - Updates a single document within the collection based on the filter.
    
     db.restaurant.updateOne(
      { "name" : "Central Perk Cafe" },
      { 
        $set: {             // when using mongoose, we dont need to add this $set n other things, this is taken care by mongoose internally
          "violations" : 3 
        } 
      }
   );



4. delete data
   deleteMany() - Removes all documents that match the filter from a collection.
   deleteOne() - Removes a first document that match the filter from a collection.
   drop() - removes collection from database.
  

