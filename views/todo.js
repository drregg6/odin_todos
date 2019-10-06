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

    displayFolder();
  },

  displayFullTodo: function(element) {
    console.log(element);
    const EXPANDS = document.querySelectorAll('.expand');
    const FORMS = document.querySelectorAll('.edit-todo-form');

    FORMS.forEach(form => {
      if (form.classList.contains('show')) {
        form.classList.toggle('show');
        form.classList.toggle('hidden');
      }
    });

    let children = [...element.children];
    children.forEach(child => {
      if (child.classList.contains('expand')) {
        if (child.classList.contains('hidden')) {
          for (let i = 0; i < EXPANDS.length; i++) {
            EXPANDS[i].classList.remove('show');
            EXPANDS[i].classList.add('hidden');
          }
        }
        child.classList.toggle('show');
        child.classList.toggle('hidden');
      }
    });
  },

  displayEditTodo: function(element) {
    let li = element.parentNode.parentNode;
    let editElement;

    for (let i = 0; i < li.children.length; i++) {
      if (li.children[i].classList.contains('edit-todo-form')) {
        editElement = li.children[i];
      }
      if (li.children[i].classList.contains('expand')) {
        li.children[i].classList.toggle('show');
        li.children[i].classList.toggle('hidden');
      }
    }
    editElement.classList.toggle('show');
    editElement.classList.toggle('hidden');
  }
}