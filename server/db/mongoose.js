var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://spame:Algolia12!@ds257314.mlab.com:57314/somedb');

module.exports = {mongoose};