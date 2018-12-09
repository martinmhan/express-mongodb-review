const Todo = require('../index.js'); // import the Todo model

const newData = [
  {
    task: 'Go for a run'
  },
  {
    task: 'watch TV'
  },
  {
    task: 'eat food'
  },
  {
    task: 'build a todo list'
  }
];

const insertData = () => {
  Todo.insertMany(newData); // invoke insertMany with array of seed data
};

insertData();