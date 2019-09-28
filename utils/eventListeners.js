const displayFolder = require('../views/folders').displayFolder;

module.exports = {
  navEventListener: function() {
    const FOLDERS = document.querySelectorAll('.folder');
    FOLDERS.forEach(folder => {
      folder.addEventListener('click', function(ev) {
        let el = ev.target;
        let name = el.innerText.toLowerCase();

        displayFolder(name);
      });
    });
  }
}