const Folder = require('../models/Folder');
const myFolders = require('../utils/universalVar').folders;

module.exports = {
  getFolder: function(id) {
    for (let i = 0; i < myFolders.length; i++) {
      if (myFolders[i].id === id) {
        return myFolders[i];
      }
    }
    return 'No folder found';
  },

  addFolder: function(name) {
    const newFolder = new Folder(name);
    myFolders.push(newFolder);

    return myFolders;
  },

  removeFolder: function(arr, id) {
    let index;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        index = arr.indexOf(arr[i]);
      }
    }
    if (index !== undefined) {
      arr.splice(index, 1);
    }
    return arr;
  }
}