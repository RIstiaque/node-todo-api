const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo.js');
const {User} = require('../server/models/user');

// Todo.remove({}).then( (res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({text: 'Something Here'}).then((todo)=>{
    console.log(todo);
});

Todo.findByIdAndRemove('5c3d5b78eeb1ab699c17c4f1').then( (todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});