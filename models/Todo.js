class Todo {
  constructor (title, desc, dueDate, priority, isComplete=false, folder='default') {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = isComplete;
    this.folder = folder;
    this.id = Math.floor(Math.random() * 1000);
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
    return this.dueDate;
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
  set folder(folders, val) {
    if (folders.indexOf(val) !== -1) {
      this._folder = val;
    } else {
      alert('Not possible');
      return;
    }
  }
}

module.exports = Todo;