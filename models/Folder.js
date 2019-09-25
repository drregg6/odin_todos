const uuidv4 = require('uuid/v4');

class Folder {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = uuidv4();
  }

  getTodos() {
    return this.todos;
  }
  addTodo(todo) {
    this.todos.push(todo);
  }

  getId() {
    return this.id;
  }

  // Getters and Setters work together
  // One cannot exist without the other
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}

module.exports = Folder;