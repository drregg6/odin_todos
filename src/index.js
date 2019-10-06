/*

=== TODO ===
- EDIT TODO
- Order list (?)
- Add localStorage (?)
- mobile css


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
const editTodo = require('../actions/todoActions').editTodo;

// Controllers
const displayNav = require('../views/nav').displayNav;
const displayFolder = require('../views/folders').displayFolder;

// Utils
const eventListeners = require('../utils/eventListeners');


/*

=== Note on localStorage ===
In order to store Objects in localStorage
They need to be JSON.stringify(obj)'d
And then to use the data
They need to be JSON.parse(obj)'d

=== Example ===
localStorage.setItem('default': JSON.stringify(defaultFolder));
JSON.parse(localStorage.getItem('default'));

=== To use localStorage ===
Most of the functions will need to be re-written
  - or set another parameter to 'localStorage'
  - have it true / false
  - let the function add accordingly

*/
if (typeof(Storage) !== undefined) {
  localStorage.setItem('name', {});
} else {
  console.log('Universal vars!');
}



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
  eventListeners(event);
});

window.onload = function() {
  displayNav();
  displayFolder();
  console.log(myFolders);
}