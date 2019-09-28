module.exports = function() {
  const li = document.createElement('li');
  li.classList.add('new-todo-li');
  const h2 = document.createElement('h2');
  h2.classList.add('new-todo-h2');
  h2.innerText = 'Add a new Todo';
  const div = document.createElement('div');
  div.classList.add('hidden');
  div.classList.add('new-todo');

  div.innerHTML = `<label for="new-todo-title">Title</label>
  <input id="new-todo-title" name="new-todo-title" class="new-todo-title" type="text" placeholder="TODO" />
  <label for="new-todo-desc">Description</label>
  <textarea id="new-todo-desc" name="new-todo-desc"  placeholder="Go to this place and take part in this activity" class="new-todo-desc"></textarea>
  <label for="new-todo-duedate">Due Date</label>
  <input id="new-todo-duedate" name="new-todo-duedate" type="text" placeholder="MM/DD/YYYY" class="new-todo-duedate">
  <label for="new-todo-prioroity">Priority</label>
  <input id="new-todo-priority" name="new-todo-priority" type="text" placeholder="Low / Medium / High" class="new-todo-priority">
  <input type="submit" value="Submit" />`;

  li.appendChild(h2);
  li.appendChild(div);

  return li;
}