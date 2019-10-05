/*

This can probably be broken down even more

*/

// Variables
const myFolders = require('./universalVar').folders;
// Views
const displayFullTodo = require('../views/todo').displayFullTodo;
const displayEditTodo = require('../views/todo').displayEditTodo;
const displayNewTodo = require('../views/todo').displayNewTodo;
const displayFolder = require('../views/folders').displayFolder;
const displayNav = require('../views/nav').displayNav;
const checkDate = require('./checkDate');
// Actions
const removeFolder = require('../actions/folderActions').removeFolder;
const deleteTodo = require('../actions/todoActions').deleteTodo;

module.exports = function(event) {
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
    console.log(id)
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

  if (event.target && event.target.classList.contains('edit-todo')) {
    let li = event.target.parentNode.parentNode.parentNode;
    let id = li.dataset.id;
    displayEditTodo(event.target.parentNode.parentNode.parentNode);

    // Remove displayFullTodo
    
    // Toggle editTodoForm
  }

  if (event.target && event.target.classList.contains('edit-todo-submit')) {
    // let ul = event.target.parentNode.parentNode.parentNode.parentNode;
    // folderId = ul.dataset.id;
    // editTodo();
  }
}