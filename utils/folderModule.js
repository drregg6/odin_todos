const Folder = require('../models/Folder');

module.exports = {
  addFolder: function(arr, name) {
    const newFolder = new Folder(name);
    arr.push(newFolder);

    return arr;
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