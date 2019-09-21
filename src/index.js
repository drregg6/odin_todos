const Todo = require('../utils/Todo');

let newTodo = new Todo('title', 'desc', 'dueDate', 'priority');
newTodo.isComplete = true;
console.log(newTodo.isComplete);