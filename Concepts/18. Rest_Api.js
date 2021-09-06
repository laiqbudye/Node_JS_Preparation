REST (representational state transfer)
  an architechtural style for building APIs

REST standarises a way to of using the HTTP requests i.e for posting data we can send post request & listen it with app.post, for delete send a delete req & listen it with app.delete.
  

  app.get('/api/person/:id', function(req, res) {     //:id is the dynamic id that we can extract from URL using rq.param.id
      // get that person data from DB
      res.json({firstname: "Laiq", lastname: "Budye"});
  })


  app.post('/api/person', function(req, res) {
    // save that person data yto DB
  })

  app.delete('/api/person/:id', function(req, res) {
     // delete that person from DB
  })


by default browser makes GET request. to make a post request we need to make post request explicitly.

type of requests:-
  1. GET - this is default one. it is used to get data from server

  2. POST - it is used to post/store some data from client to server

  3. PUT - it is used to update the data on server. i.e if the data is already available on server & we just want to update that.

  4. DELETE - it is used to delete data.
