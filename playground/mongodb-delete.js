// MongoDB module v2, if in package json mongo is v3 then refer to node js udemy course section 7, lecture 63 around 12 minutes in (give or take a few mins)
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //     console.log(result);
  // });


  // For Users

  db.collection('Users').deleteMany({name: 'Ryan'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b3ccc487a68792dbcdd84dc')
  }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
