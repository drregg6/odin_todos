const capitalize = require('./capitalize');

module.exports = function(obj) {
  let priority = capitalize(obj.priority);
  let desc = obj.desc;

  let div = document.createElement('div');
  div.classList.add('expand');
  div.classList.add('hidden');
  let priorityP = document.createElement('p');
  let descP = document.createElement('desc');
  let firstButton = document.createElement('button');
  let secondButton = document.createElement('button');
  firstButton.classList.add('complete-todo');
  secondButton.classList.add('edit-todo');

  priorityP.innerText = `Priority - ${priority}`;
  descP.innerText = `${desc}`;
  firstButton.innerText = `Complete?`;
  secondButton.innerText = `Edit?`;

  div.appendChild(priorityP);
  div.appendChild(descP);
  div.appendChild(firstButton);
  div.appendChild(secondButton);

  return div;
}