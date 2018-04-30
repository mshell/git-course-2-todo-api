const {ObjectID} = require('mongodb');
const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5ae73f9171985a8d0e4c1aee').then((todo)=>{
  console.log(todo);
})
