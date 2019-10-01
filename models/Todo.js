const uuidv4 = require('uuid/v4');

class Todo {
  constructor (title, desc, dueDate, priority, folder='default', isComplete=false) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.folder = folder;
    this.id = uuidv4();
  }

  todoMethod() {
    console.log('Hi from Todo');
  }

  get title() {
    return this._title;
  }
  set title(val) {
    this._title = val;
  }

  get desc() {
    return this._desc;
  }
  set desc(val) {
    this._desc = val;
  }

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(val) {
    this._dueDate = val;
  }

  get priority() {
    return this._priority;
  }
  set priority(val) {
    this._priority = val;
  }

  get isComplete() {
    return this._isComplete;
  }
  set isComplete(bool) {
    this._isComplete = bool;
  }

  get folder() {
    return this._folder;
  }
  set folder(val) {
    // if (folders.indexOf(val) !== -1) { this logic will have to go in a function
    this._folder = val;
    // } else {
      // alert('Not possible');
      // return;
    // }
  }
}

module.exports = Todo;