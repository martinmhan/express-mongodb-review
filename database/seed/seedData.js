const { Todo } = require("../models");

const toDoData = [
  {
    name: "Go for a run"
  },
  {
    name: "Take a shower"
  },
  {
    name: "Eat something"
  },
  {
    name: "Go to sleep"
  }
];

toDoData.forEach(todo => {
  let { name } = todo;
  new Todo({
    name
  }).save((err, newTodo) => {
    if (err) {
      console.error(err);
    }
    console.log(`created: ${newTodo}`);
  });
});
