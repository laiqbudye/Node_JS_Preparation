mongoose
  is npm pkg which allows to perform some additional tasks with mongodb.  
  e.g. if we want to perform some validation checks, like age will have data in number format only or name will have only string data
  these checks can be done by mongoose.
  
  to install -- npm i mongoose
  
  under the hood, mongoose uses mongodb pkg only.
  
  
  const mongoose = require('mongoose');
  
  mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {   // task-manager-api is the DB name
      useNewUrlParser: true,   // using new url parser to parse data as old one is deprecated now
      useCreateIndex: true     // from mongoose V6.0.0, we dont need to add these option, it will take them automatically as true 
  });

  const User = mongoose.connect('User', {    //it will take User, convert it into small case i.e user & then pluralises this. i.e user, so data will e stored in 'users' collection
      name: {     
        type: String        // if we pass any other data than String then will throw an error
      },
      age: {
        type: Number
      }
  })

  const me = new User({name: 'Laiq', age: 26});   // created me of type User

  me.save().then(res => {      // save() saves the data in DB & return promise with inserted data or error
  
  }).catch(err => {
  
  })
