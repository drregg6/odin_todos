const NAV = document.querySelector('.nav');
const myFolders = require('../utils/universalVar').folders;
const removeAllNodes = require('../utils/removeAllNodes');

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