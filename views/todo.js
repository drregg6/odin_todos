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
  }
}