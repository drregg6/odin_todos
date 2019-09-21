const Todo = require('../utils/Todo');
const Folder = require('../utils/Folder');

let newTodo = new Todo('title', 'desc', 'dueDate', 'priority');
let folder = new Folder('Default');
newTodo.isComplete = true;
console.log(newTodo.isComplete);
folder.addTodo(newTodo);
console.log(folder.id);
console.log(folder.getTodos());