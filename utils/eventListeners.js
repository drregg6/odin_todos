const displayFolder = require('../views/folders').displayFolder;

module.exports = {
  navEventListeners: function() {
    const FOLDERS = document.querySelectorAll('.folder');
    FOLDERS.forEach(folder => {
      folder.addEventListener('click', function(ev) {
        let el = ev.target;
        let name = el.innerText.toLowerCase();

        displayFolder(name);
      });
    });
  }

  // Not fucking working
  // displayFolder() is not a function
  // todosEventListeners: function() {
  //   const TODOS = document.querySelectorAll('.todo');
  //   TODOS.forEach(todo => {
  //     todo.addEventListener('click', function(ev) {
  //       console.log('fuck off');
  //     });
  //   });
  // }
}