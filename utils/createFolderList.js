const newTodoLi = require('./newTodoLi');
const expandTodoLi = require('./expandTodoLi');
const capitalize = require('./capitalize');

module.exports = function(obj) {
  let ul = document.createElement('ul');
  ul.classList.add('todos');
  ul.setAttribute('data-id', obj.id);
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button')
  deleteButton.innerText = 'X';
  let titleLi = document.createElement('li');
  titleLi.classList.add('project-title');
  titleLi.innerHTML = `<h1>${capitalize(obj.name)}</h1>`;

  titleLi.prepend(deleteButton);
  ul.appendChild(titleLi);

  obj.todos.forEach(todo => {
    let li = document.createElement('li');
    li.classList.add(`${todo.priority}`);
    li.classList.add('todo');
    li.setAttribute('data-id', todo.id);
    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let thirdDiv = expandTodoLi(todo);
    firstDiv.classList.add('task');
    secondDiv.classList.add('due-date');

    firstDiv.innerText = todo.title;
    secondDiv.innerText = todo.dueDate;

    li.appendChild(firstDiv);
    li.appendChild(secondDiv);
    li.appendChild(thirdDiv);
    ul.appendChild(li);
  });
  ul.appendChild(newTodoLi());

  return ul;
}