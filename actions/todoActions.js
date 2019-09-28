const Todo = require('../models/Todo');
const myFolders = require('../utils/universalVar').folders;

module.exports = {
  getTodos: function(folder) {
    return folder.todos;
  },

  getTodo: function(folder, id) {
    let todosArr = folder.todos;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === id) {
        return todosArr[i];
      }
    }
    return 'No todo found';
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
  },

  deleteTodo(folder, id) {
    let todosArr = folder.todos;
    let index;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === id) {
        index = todosArr.indexOf(todosArr[i]);
      }
    }
    if (index) {
      todosArr.splice(index, 1);
    }
    return todosArr;
  }
}