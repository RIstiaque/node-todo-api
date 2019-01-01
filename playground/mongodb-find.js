// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c2877e52bf4f962e34a8ec7')
    // }).toArray().then((docs) => {
    //     console.log('Todos\n', JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch Todos: ", err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch Todos: ", err);
    // })

    db.collection('Users').find({
        name: 'Mark Er'
    }).toArray().then((docs) => {
        console.log('Todos\n', JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch items.');
    });


    // db.close();
});