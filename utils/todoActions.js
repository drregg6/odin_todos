const Todo = require('../models/Todo');
const myFolders = require('../utils/universalVar').folders;

module.exports = {
  getTodos: function(folder) {
    console.log('getTodos');
  },
  getTodo: function(id) {
    console.log('getTodo');
  },
  addTodo: function(title, desc, dueDate, priority, folder='default') {
    console.log(folder)
    let newTodo = new Todo(title, desc, dueDate, priority, folder);
    let folder = myFolders.filter(folder => {
      return folder.name === folder;
    });
    folder.todos.push(newTodo);

    return folder;
  }
}