const NAV = document.querySelector('.nav');
const myFolders = require('../utils/universalVar').folders;
const removeAllNodes = require('../utils/removeAllNodes');
const navEventListeners = require('../utils/eventListeners').navEventListeners;

module.exports = {
  displayNav: function() {
    navSetup();

    for (let i = 0; i < myFolders.length; i++) {
      let name = myFolders[i].name;
      let li = document.createElement('li');
      li.setAttribute('id', name);
      li.classList.add('folder');
      li.innerText = name;

      NAV.appendChild(li);
    }

    navEventListeners();
  }
}

const navSetup = () => {
  removeAllNodes(NAV);
  
  const li = document.createElement('li');
  li.setAttribute('id', 'all');
  li.classList.add('folder');
  li.innerText = 'show all folders';
  NAV.appendChild(li);
}