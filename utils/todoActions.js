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
    let newTodo = new Todo(title, desc, dueDate, priority, folder);
    let myFolder;
    for (let i = 0; i < myFolders.length; i++) {
      if (myFolders[i].name === folder) {
        myFolder = myFolders[i];
      }
    }
    myFolder.todos.push(newTodo);

    return myFolder;
  }
}