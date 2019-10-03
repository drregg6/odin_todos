/*

=== TODO ===
- EDIT TODO should also be implemented
- TODO should only take in dates that are MM/DD/YYYY format
    formatDate can be added to utils
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

// Folder Actions
const addFolder = require('../actions/folderActions').addFolder;
const removeFolder = require('../actions/folderActions').removeFolder;

// Todo Actions
const deleteTodo = require('../actions/todoActions').deleteTodo;

// Controllers
const displayNav = require('../views/nav').displayNav;
const displayFolder = require('../views/folders').displayFolder;
const displayNewTodo = require('../views/todo').displayNewTodo;
const displayFullTodo = require('../views/todo').displayFullTodo;

// Utils
const checkDate = require('../utils/checkDate');




const INPUT = document.querySelector('#new-folder-input');
const SUBMIT = document.querySelector('#new-folder-submit');
SUBMIT.addEventListener('click', function() {
  if (myFolders.length < 5) {
    if (INPUT.value !== '') {
      addFolder(INPUT.value);
    } else {
      alert('Input needs a value');
    }
  } else {
    alert('Too many folders, please delete one');
  }
  // Re-render nav
  displayNav();
  // Re-render Folders
  displayFolder();
  INPUT.value = '';
});


// Event Delegation
// EventListeners for dynamically rendered HTML
document.addEventListener('click', function(event) {
  // TODO eventListener
  if (event.target && event.target.classList.contains('todo')) {
    console.log([...event.target.children]);
    displayFullTodo(event.target);
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
    let id = event.target.parentNode.parentNode.parentNode.dataset.id;
    let children = [...event.target.parentNode.childNodes];
    let folderName;
    for (let i = 0; i < children.length; i++) {
      if (children[i].className && children[i].className === 'new-todo-input') {
        let key = children[i].id;
        let val = children[i].value;
        if (key === 'duedate') {
          if (!checkDate(val)) {
            alert('Please enter a valid date');
            return;
          }
        }
        newTodo[key] = val;
      }
    }
    for (let i = 0; i < myFolders.length; i++) {
      if (myFolders[i].id === id) {
       folderName = myFolders[i].name;
      }
    }
    newTodo.folder = folderName;
    displayNewTodo(newTodo);
  }

  // COMPLETE-TODO eventListener
  if (event.target && event.target.classList.contains('complete-todo')) {
    // need the folder id
    let todoElement = event.target.parentNode.parentNode;
    let folderElement = todoElement.parentNode;
    let todoId = todoElement.dataset.id;
    let folderId = folderElement.dataset.id;
    deleteTodo(folderId, todoId);
    displayFolder();
  }
})

window.onload = function() {
  displayNav();
  displayFolder();
}