/*

This can be localStorage
Length should be limited to five

*/
const uuidv4 = require('uuid/v4');

module.exports = {
  folders: [
    {
      name: "default",
      todos: [],
      id: uuidv4()
    }
  ]
}