module.exports = function(todo) {
  let div = document.createElement('div');
  div.classList.add('edit-todo-form');
  div.classList.add('hidden');

  div.innerHTML = `<label for="title">Title</label>
  <input id="title" name="title" class="new-todo-input" type="text" placeholder="TODO" value="${todo.title}" />
  <label for="desc">Description</label>
  <textarea id="desc" name="desc"  placeholder="Go to this place and take part in this activity" class="new-todo-input">${todo.desc}</textarea>
  <label for="duedate">Due Date</label>
  <input id="duedate" name="input" type="text" placeholder="MM/DD/YYYY" class="new-todo-input" value="${todo.dueDate}" />
  <label for="priority">Priority</label>
  <input id="priority" name="priority" type="text" placeholder="Low / Medium / High" class="new-todo-input" value="${todo.priority}" />
  <label for="folder">Folder</label>
  <input id="folder" name="folder" type="text" placeholder="Folder" class="new-todo-input" value="${todo.folder}" />
  <input class="edit-todo-submit" type="submit" value="Submit" />`;

  return div;
}