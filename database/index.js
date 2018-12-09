// TODO
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newlist', {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.on('error', () => console.log('Connection error'));
connection.on('open', () => console.log('Successfully connected to mongoDB!'));

const List = mongoose.Schema({
  task: String
});

const Todo = mongoose.model('LOL', List); // create collection named 'Todo'

module.exports = Todo;