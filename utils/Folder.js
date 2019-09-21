class Folder {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = Math.floor(Math.random() * 100); // replace with uuid
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