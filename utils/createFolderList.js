const newTodoLi = require('./newTodoLi');
const expandTodoLi = require('./expandTodoLi');
const todoEditForm = require('./todoEditForm');
const capitalize = require('./capitalize');

module.exports = function(obj) {
  const { name, id, todos } = obj;
  let ul = document.createElement('ul');
  ul.classList.add('todos');
  ul.setAttribute('data-id', id);
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button')
  deleteButton.innerText = 'X';
  let titleLi = document.createElement('li');
  titleLi.classList.add('project-title');
  titleLi.innerHTML = `<h1>${capitalize(name)}</h1>`;

  titleLi.prepend(deleteButton);
  ul.appendChild(titleLi);

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement('li');
    li.classList.add(`${todos[i]._priority}`);
    li.classList.add('todo');
    li.setAttribute('data-id', todos[i].id);
    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let thirdDiv = expandTodoLi(todos[i]);
    let fourthDiv = todoEditForm(todos[i]);
    firstDiv.classList.add('task');
    secondDiv.classList.add('due-date');

    firstDiv.innerText = todos[i]._title;
    secondDiv.innerText = todos[i]._dueDate;

    li.appendChild(firstDiv);
    li.appendChild(secondDiv);
    li.appendChild(thirdDiv);
    li.appendChild(fourthDiv);
    ul.appendChild(li);
  }
  ul.appendChild(newTodoLi());

  return ul;
}