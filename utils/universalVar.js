const uuidv4 = require('uuid/v4');

module.exports = {
  folders: [
    {
      name: 'default',
      todos: [],
      id: uuidv4()
    }
  ]
};