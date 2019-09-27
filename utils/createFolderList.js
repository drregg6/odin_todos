module.exports = function(obj) {
  let ul = document.createElement('ul');
  ul.classList.add('todos');
  let titleLi = document.createElement('li');
  titleLi.classList.add('project-title');
  titleLi.innerHTML = `<h1>${obj.name}</h1>`;

  ul.appendChild(titleLi);

  obj.todos.forEach(todo => {
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

  return ul;
}