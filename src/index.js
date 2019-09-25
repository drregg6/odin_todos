const Todo = require('../models/Todo');
const Folder = require('../models/Folder');
const myFolders = require('../utils/universalVar').folders;
const getFolder = require('../utils/folderActions').getFolder;
const addFolder = require('../utils/folderActions').addFolder;
const removeFolder = require('../utils/folderActions').removeFolder;
const addTodo = require('../utils/todoActions').addTodo;

let newTodo = new Todo('title', 'desc', 'dueDate', 'priority');
let folder = new Folder('Default');
newTodo.isComplete = true;
console.log(newTodo.isComplete);
folder.addTodo(newTodo);
console.log(folder.id);
console.log(folder.getTodos());
console.log(myFolders);
addFolder(myFolders, 'Javascript');
addFolder(myFolders, 'Ruby');
addFolder(myFolders, 'Life');
console.log(myFolders);
console.log(myFolders[1].id);
console.log(getFolder(myFolders, 'myFolders[4].id'));
console.log(getFolder(myFolders, myFolders[2].id));
console.log(addTodo('name', 'desc', 'duedate', 'priority'));
console.log(addTodo('Take out trash', 'Collect all trash from bathrooms, kitchen, and bedroom and bring them outside', '9/25/2018', 'high', 'Javascript'));


const TODOS = document.querySelectorAll('.todo');
TODOS.forEach(TODO => {
  TODO.addEventListener('click', function() {
    console.log('I feel you');
  });
});

const SUBMIT = document.querySelector('button');
SUBMIT.addEventListener('click', function() {
  console.log(removeFolder(myFolders, myFolders[1].id));
});

/*

Adjust the input listener when user
- Adds a new folder
- Removes a folder
- IF (folders.length === 5)
    then input = disabled

*/