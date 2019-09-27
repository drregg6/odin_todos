/*

Adjust the input listener when user
- Removes a folder

*/

// Universal Variables
const myFolders = require('../utils/universalVar').folders;
let folder = require('../utils/universalVar').folder; // This probably won't stay

// Models
const Todo = require('../models/Todo');
const Folder = require('../models/Folder');

// Folder Actions
const getFolder = require('../utils/folderActions').getFolder;
const addFolder = require('../utils/folderActions').addFolder;
const removeFolder = require('../utils/folderActions').removeFolder;

// Todo Actions
const addTodo = require('../utils/todoActions').addTodo;
const getTodos = require('../utils/todoActions').getTodos;
const getTodo = require('../utils/todoActions').getTodo;
const deleteTodo = require('../utils/todoActions').deleteTodo;

// Controllers
const displayNav = require('../views/nav').displayNav;
const displayFolder = require('../views/folders').displayFolder;



const TODOS = document.querySelectorAll('.todo');
TODOS.forEach(TODO => {
  TODO.addEventListener('click', function() {
    console.log('I feel you');
  });
});

const INPUT = document.querySelector('#new-folder-input');
const SUBMIT = document.querySelector('#new-folder-submit');
SUBMIT.addEventListener('click', function() {
  if (myFolders.length < 5) {
    addFolder(INPUT.value);
  } else {
    alert('Too many folders, please delete one');
  }
  // Re-render nav
  displayNav();
  // Re-render Folders
  displayFolder();
  INPUT.value = '';
});

const TEST = document.querySelector('#test');
TEST.addEventListener('click', function(ev) {
  console.log('test');
  console.log(document.querySelectorAll('.folder'));
});

// const FOLDERS = document.querySelectorAll('.folder');
// FOLDERS.forEach(folder => {
//   folder.addEventListener('click', function(ev) {
    
//   });
// });

window.onload = function() {
  displayNav();
  displayFolder();
}









// const NEW_TODO_H2 = document.querySelector('.new-todo-li h2');
// const NEW_TODO = document.querySelector('.new-todo');
// NEW_TODO_H2.addEventListener('click', function(ev) {
//   NEW_TODO.classList.toggle('hidden');
//   NEW_TODO.classList.toggle('show');
// });