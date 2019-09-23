const Todo = require('../models/Todo');
const Folder = require('../models/Folder');
let folders = [];

let newTodo = new Todo('title', 'desc', 'dueDate', 'priority');
let folder = new Folder('Default');
newTodo.isComplete = true;
console.log(newTodo.isComplete);
folder.addTodo(newTodo);
console.log(folder.id);
console.log(folder.getTodos());



const TODOS = document.querySelectorAll('.todo');
TODOS.forEach(TODO => {
  TODO.addEventListener('click', function() {
    console.log('I feel you');
  });
});