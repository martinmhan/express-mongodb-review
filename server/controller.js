const { Todo } = require("../database/models.js");

module.exports = {
  get: (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err) {
        console.log(err);
      } else {
        console.log(todos);
        res.status(200).send(todos);
      }
    });
  },
  post: (req, res) => {
    const { name } = req.body;
    new Todo({
      name
    }).save((err, newTodo) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(newTodo);
      }
    });
  },
  delete: (req, res) => {
    const { name } = req.query;
    Todo.deleteOne({ name }, (err, deleted) => {
      if (err) {
        console.log(err);
      } else {
        res.status(202).send("deleted");
      }
    });
  }
};
