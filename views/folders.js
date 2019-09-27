const CONTENT = document.querySelector('.content');
const myFolders = require('../utils/universalVar').folders;
const createFolderList = require('../utils/createFolderList');
const removeAllNodes = require('../utils/removeAllNodes');

module.exports = {
  // displayFolders: function() {
  //   removeAllNodes(CONTENT);
  //   myFolders.map(folder => {
  //     CONTENT.appendChild(createFolderList(folder));
  //   })
  // },

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
  }
}