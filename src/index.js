/*

=== TODO ===
- EDIT TODO should also be implemented (?)
- Add localStorage
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

// Controllers
const displayNav = require('../views/nav').displayNav;
const displayFolder = require('../views/folders').displayFolder;

// Utils
const eventListeners = require('../utils/eventListeners');




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
}