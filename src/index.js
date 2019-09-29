/*

=== TODO ===
- implement TODO rendering
    add TODO
    delete TODO
    display TODO
- TODO should only take in dates that are MM/DD/YYYY format
- each TODO li should have an extra DIV that will expand on click
    shows description and deletion option
- when TODO is deleted, re-render entire page
- when TODO is added, re-render entire page
- when TODO is displayed, show only that TODO
- mobile css
- separate eventListeners into a new file


=== Note on eventListeners ===
eventListeners need to be dynamically rendered
with the HTML that is being created
or else document.querySelector
will not be able to find any of the elements that are being targeted

=== Event delegation ===
eventListeners are attached to document- the parent node-
and looks for the element with the matching IF statement
The eventListener then runs on that element

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
const displayNewTodo = require('../views/todo').displayNewTodo;




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

  // ADD-TODO eventListener
  if (event.target && event.target.classList.contains('add-new-todo')) {
    let newTodo = {};
    let children = [...event.target.parentNode.childNodes];
    let inputs = document.querySelectorAll('.new-todo-input');
    for (let i = 0; i < children.length; i++) {
      if (children[i].className && children[i].className === 'new-todo-input') {
        let key = children[i].id;
        let val = children[i].value;
        newTodo[key] = val;
        displayNewTodo(children[i]);
      }
    }
    displayNewTodo(newTodo)
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