const Todo = require('../models/Todo');
const Folder = require('../models/Folder');
const addFolder = require('../utils/folderModule').addFolder;
const removeFolder = require('../utils/folderModule').removeFolder;
let folders = [];

let newTodo = new Todo('title', 'desc', 'dueDate', 'priority');
let folder = new Folder('Default');
newTodo.isComplete = true;
console.log(newTodo.isComplete);
folder.addTodo(newTodo);
console.log(folder.id);
console.log(folder.getTodos());
addFolder();
removeFolder();



const TODOS = document.querySelectorAll('.todo');
TODOS.forEach(TODO => {
  TODO.addEventListener('click', function() {
    console.log('I feel you');
  });
});

/*

Adjust the input listener when user
- Adds a new folder
- Removes a folder
- IF (folders.length === 5)
    then input = disabled

*/