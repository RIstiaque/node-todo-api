// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err){
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(`Result: ${result}`);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(`Result: ${result}`);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log('Result: ', JSON.stringify(result, undefined, 2));
    // })

    // db.collection('Users').deleteMany({name: 'Mark Er'}).then((result) => {
    //     console.log(`Result: ${result}`);
    // });

    db.collection('Users').findOneAndDelete(
        {_id : new ObjectID('5c286e248affe137707585fc')})
        .then((result) => {
            console.log(`Deleted this one: ${JSON.stringify(result, undefined, 2)}`);
    });

    db.close();
});