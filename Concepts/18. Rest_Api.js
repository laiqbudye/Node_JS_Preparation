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
