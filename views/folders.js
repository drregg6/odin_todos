const CONTENT = document.querySelector('.content');
const myFolders = require('../utils/universalVar').folders;
const createFolderList = require('../utils/createFolderList');
const removeAllNodes = require('../utils/removeAllNodes');

module.exports = {
  displayFolder: function(folder) {
    removeAllNodes(CONTENT);
    myFolders.map(folder => {
      CONTENT.appendChild(createFolderList(folder));
    });
    for (let i = 0; i < myFolders.length; i++) {
      if (myFolders[i].name === folder) {
        removeAllNodes(CONTENT);
        CONTENT.appendChild(createFolderList(myFolders[i]));
      }
    }
    todoEventListener();
    deleteEventListener();
  }
}

const deleteEventListener = () => {
  const DELETES = document.querySelectorAll('.delete-button');
  DELETES.forEach(button => {
    button.addEventListener('click', function(ev) {
      console.log(`I'm here to delete you!`);
    });
  });
};

const todoEventListener = () => {
  const TODOS = document.querySelectorAll('.todo');
  TODOS.forEach(todo => {
    todo.addEventListener('click', function(ev) {
      console.log('Hello world! :)');
    });
  });
}