const {
  MongoClient,
  ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //   db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5ae0b68971985a8d0e4ac825')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // });
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5ae0cfed89ea02742b5246db")
    }, {{
      $set: {
        name: 'Avery Andrews'
      }
    },

    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
  console.log(result);
});
});

//ObjectId("5ae0cfed89ea02742b5246db")
