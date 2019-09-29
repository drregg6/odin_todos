module.exports = function() {
  const li = document.createElement('li');
  li.classList.add('new-todo-li');
  const h2 = document.createElement('h2');
  h2.classList.add('new-todo-h2');
  h2.innerText = 'Add a new Todo';
  const div = document.createElement('div');
  div.classList.add('hidden');
  div.classList.add('new-todo');

  div.innerHTML = `<label for="title">Title</label>
  <input id="title" name="title" class="new-todo-input" type="text" placeholder="TODO" />
  <label for="desc">Description</label>
  <textarea id="desc" name="desc"  placeholder="Go to this place and take part in this activity" class="new-todo-input"></textarea>
  <label for="duedate">Due Date</label>
  <input id="duedate" name="input" type="text" placeholder="MM/DD/YYYY" class="new-todo-input">
  <label for="priority">Priority</label>
  <input id="priority" name="priority" type="text" placeholder="Low / Medium / High" class="new-todo-input">
  <input class="add-new-todo" type="submit" value="Submit" />`;

  li.appendChild(h2);
  li.appendChild(div);

  return li;
}