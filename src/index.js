/*

Adjust the input listener when user
- Removes a folder
- Render addTodo li
- Add Todo


=== Note on eventListeners ===
eventListeners need to be dynamically rendered
with the HTML that is being created
or else document.querySelector
will not be able to find any of the elements that are being targeted

*/

// Universal Variables
const myFolders = require('../utils/universalVar').folders;

// Models
const Todo = require('../models/Todo');
const Folder = require('../models/Folder');

// Folder Actions
const getFolder = require('../actions/folderActions').getFolder;
const addFolder = require('../actions/folderActions').addFolder;
const removeFolder = require('../actions/folderActions').removeFolder;

// Todo Actions
const addTodo = require('../actions/todoActions').addTodo;
const getTodos = require('../actions/todoActions').getTodos;
const getTodo = require('../actions/todoActions').getTodo;
const deleteTodo = require('../actions/todoActions').deleteTodo;

// Controllers
const displayNav = require('../views/nav').displayNav;
const displayFolder = require('../views/folders').displayFolder;




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


// Event Delegation
// EventListeners for dynamically rendered HTML
document.addEventListener('click', function(event) {
  // TODO eventListener
  if (event.target && event.target.classList.contains('todo')) {
    console.log('HELLO FROM SCRIPTS')
  };
  
  // DELETE eventListener
  if (event.target && event.target.classList.contains('delete-button')) {
      let parent = event.target.parentNode.parentNode;
      let id = parent.dataset.id;
      console.log(removeFolder(id));
      displayFolder();
      displayNav();
  };

  // NAV eventListener
  if (event.target && event.target.classList.contains('folder')) {
    let el = event.target;
    let name = el.innerText.toLowerCase();

    displayFolder(name);
  }

  // NEW-TODO eventListener
  if (event.target && event.target.classList.contains('new-todo-h2')) {
    let div = event.target.nextSibling;
    div.classList.toggle('hidden');
    div.classList.toggle('show');
  }
})

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