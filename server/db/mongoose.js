var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://spame:Algolia12!@ds257314.mlab.com:57314/somedb');

module.exports = {mongoose};