// TODO
const Todo = require('../database/index.js');

module.exports = {
  get: (req, res) => {
    // mongoose requests use callbacks (sequelize uses promises)
    Todo.find({}, (err, data) => { // first parameter is an options object to specify data to find
      if (err) {
        console.log(err);
      } else {
        console.log('GET successful');
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    const task = req.body.task;
    new db({ task }) // creates new instance for collection. auto adds a unique id 
      .save((err, data) => { // save instance into collection
        if (err) {
          console.log(err);
        } else {
          console.log('POST successful');
          res.status(201).send(data);
        }
      });
  },
  delete: (req, res) => {
    const str = req.body.task;
    Todo.deleteOne({task: str}, (err, data) => { // specify which task to delete in the options object
      if (err) {
        console.log(err);
      } else {
        console.log('DELETE successful');
        res.status(202).send('Successfully deleted task');
      }
    });
  }
};