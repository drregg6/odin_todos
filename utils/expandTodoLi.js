const capitalize = require('./capitalize');

module.exports = function(obj) {
  let priority = capitalize(obj.priority);
  let desc = obj.desc;

  let div = document.createElement('div');
  div.classList.add('expand');
  div.classList.add('hidden');
  let priorityP = document.createElement('p');
  let descP = document.createElement('desc');
  let button = document.createElement('button');
  button.classList.add('complete-todo');

  priorityP.innerText = `Priority - ${priority}`;
  descP.innerText = `${desc}`;
  button.innerText = `Complete?`;

  div.appendChild(priorityP);
  div.appendChild(descP);
  div.appendChild(button);

  return div;
}