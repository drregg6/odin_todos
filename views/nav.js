const NAV = document.querySelector('.nav');
const myFolders = require('../utils/universalVar').folders;
const removeAllNodes = require('../utils/removeAllNodes');

module.exports = {
  displayNav: function() {
    removeAllNodes(NAV);
    const firstLi = document.createElement('li');
    firstLi.setAttribute('id', 'all');
    firstLi.classList.add('folder');
    firstLi.innerText = 'show all folders';
    NAV.appendChild(firstLi);

    for (let i = 0; i < myFolders.length; i++) {
      let name = myFolders[i].name;
      let li = document.createElement('li');
      li.setAttribute('id', name);
      li.classList.add('folder');
      li.innerText = name;

      NAV.appendChild(li);
    }
  }
}