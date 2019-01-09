var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save.');
// });

// var nexTodo = new Todo({
//     text: '    Edit this video    '
// });
// nexTodo.save().then((result) => {
//     console.log(`Saved todo:\n ${result}`);
// }, (e) => {
//     console.log('Unable to save');
// })

// var newUser = new User({
//     email: 'andrew@udemy.com'
// });

// newUser.save().then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// }, (e) => {
//     console.log('Unable to save User: ', e);
// });

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
})


app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};