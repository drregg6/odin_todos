const CONTENT = document.querySelector('.content');
const addTodo = require('../actions/todoActions').addTodo;
const removeAllNodes = require('../utils/removeAllNodes');
const displayFolder = require('./folders').displayFolder;

module.exports = {
  displayNewTodo: function(form) {
    let title = form.title;
    let desc = form.desc;
    let duedate = form.duedate;
    let priority = form.priority.toLowerCase();
    let folder = form.folder.toLowerCase();
    addTodo(title, desc, duedate, priority, folder);

    removeAllNodes(CONTENT);
    CONTENT.appendChild(displayFolder());
  },

  displayFullTodo: function(element) {
    const EXPANDS = document.querySelectorAll('.expand');
  
    for (let i = 0; i < EXPANDS.length; i++) {
      EXPANDS[i].classList.remove('show');
      EXPANDS[i].classList.add('hidden');
    }

    let children = [...element.children];
    children.forEach(child => {
      if (child.classList.contains('expand')) {
        // doesn't work because I already have all of them closing above
        child.classList.toggle('show');
        child.classList.toggle('hidden');
      }
    });
  }
}