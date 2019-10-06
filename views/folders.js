const CONTENT = document.querySelector('.content');
const myFolders = require('../utils/universalVar').folders;
const createFolderList = require('../utils/createFolderList');
const removeAllNodes = require('../utils/removeAllNodes');

module.exports = {
  displayFolder: function(folder=null) {
    removeAllNodes(CONTENT);
    if (folder === null || folder === 'show all folders') {
      for (let i = 0; i < myFolders.length; i++) {
        CONTENT.appendChild(createFolderList(myFolders[i]));
      }
    } else {
      for (let i = 0; i < myFolders.length; i++) {
        if (myFolders[i].name === folder) {
          CONTENT.appendChild(createFolderList(myFolders[i]));
        }
      }
    }
  }
}