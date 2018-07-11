// MongoDB module v2, if in package json mongo is v3 then refer to node js udemy course section 7, lecture 63 around 12 minutes in (give or take a few mins)
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // Update completed from false to true

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b45c8f43d54bbee06b55c34')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  // Increment by findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3cca0b3a9dc43720b7c7f0')
  }, {
    $set: {
      name: 'New Name Here'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
