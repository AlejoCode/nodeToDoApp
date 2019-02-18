let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let toDoSchema = new Schema({
  userName: String,
  toDo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

let toDos = mongoose.model("toDos", toDoSchema);

module.exports = toDos;
