const CONTENT = document.querySelector('.content');
const myFolders = require('../utils/universalVar').folders;

module.exports = {
  displayFolders: function() {
    while (CONTENT.firstChild) {
      CONTENT.removeChild(CONTENT.firstChild);
    }
    myFolders.map(folder => {
      let ul = document.createElement('ul');
      ul.classList.add('todos');
      let titleLi = document.createElement('li');
      titleLi.classList.add('project-title');
      titleLi.innerHTML = `<h1>${folder.name}</h1>`;

      ul.appendChild(titleLi);

      folder.todos.forEach(todo => {
        let li = document.createElement('li');
        li.classList.add(`${todo.priority}`);
        let firstDiv = document.createElement('div');
        let secondDiv = document.createElement('div');
        firstDiv.classList.add('task');
        secondDiv.classList.add('due-date');

        firstDiv.innerText = todo.title;
        secondDiv.innerText = todo.dueDate;

        li.appendChild(firstDiv);
        li.appendChild(secondDiv);
        ul.appendChild(li);
      });
      CONTENT.appendChild(ul);
    })
  },

  displayFolder: function(folder) {
    for (let i = 0; i < myFolders.length; i++) {
      if (myFolders[i].name === folder) {
        while (CONTENT.firstChild) {
          CONTENT.removeChild(CONTENT.firstChild);
        }
        let ul = document.createElement('ul');
        ul.classList.add('todos');
        let titleLi = document.createElement('li');
        titleLi.classList.add('project-title');
        titleLi.innerHTML = `<h1>${myFolders[i].name}</h1>`;

        ul.appendChild(titleLi);

        myFolders[i].todos.forEach(todo => {
          let li = document.createElement('li');
          li.classList.add(`${todo.priority}`);
          let firstDiv = document.createElement('div');
          let secondDiv = document.createElement('div');
          firstDiv.classList.add('task');
          secondDiv.classList.add('due-date');

          firstDiv.innerText = todo.title;
          secondDiv.innerText = todo.dueDate;

          li.appendChild(firstDiv);
          li.appendChild(secondDiv);
          ul.appendChild(li);
        });
        CONTENT.appendChild(ul);
      }
    }
  }
}