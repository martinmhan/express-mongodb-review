const connection = require("./");
const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  name: { type: String, require: true }
});

const Todo = mongoose.model("Todo", toDoSchema);

module.exports = { Todo };
