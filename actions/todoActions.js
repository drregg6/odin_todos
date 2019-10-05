const Todo = require('../models/Todo');
const myFolders = require('../utils/universalVar').folders;
const checkDate = require('../utils/checkDate');

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
    if (!checkDate(dueDate)) {
      return;
    }
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

  deleteTodo(folderId, todoId) {
    let todosFolder;
    for (let i = 0; i < myFolders.length; i++) {
      if (folderId === myFolders[i].id) {
        todosFolder = myFolders[i];
      }
    }
    let todosArr = todosFolder.todos;
    let index = -1;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        index = todosArr.indexOf(todosArr[i]);
      }
    }
    if (index !== -1) {
      todosArr.splice(index, 1);
    }
    return todosArr;
  },

  editTodo: function(folderId, todo) {
    // todo should be an obj
    let id = todo.id;
    let folder;
    let todoIndex;

    // Get the folder
    for (let i = 0; i < myFolders.length; i++) {
      if (folderId === myFolders[i].id) {
        folderIndex = i;
        folder = myFolders[i];
      }
    }

    // Find todo based on the id
    for (let i = 0; i < folder.todos.length; i++) {
      if (id === folder.todos[i].id) {
        todoIndex = i;
        editedTodo = {...folder.todos[i]};
      }
    }
    
    // Edit the todo
    for (let key in editedTodo) {
      editedTodo[key] = todo[key];
    }

    // Remove todo from folder
    folder.todos.splice(todoIndex, 1);
    folder.todos = [...folder.todos, editedTodo];

    // return todo
    return myFolders;
  }
}