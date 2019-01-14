const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user');

var id = '5c2b2bf3846044584ee8b06c';

if (!ObjectID.isValid(id)){
    console.log('Id is not valid.');
}

// Todo.find({
//     _id : id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('TodobyID', todo)
// }).catch(e => {
//     console.log(e);
// })

User.findById(id).then((user) => {
    if (!user){
        return console.log('User not found.');
    }
    console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch((e) => {return console.log("Incorrect ID");});