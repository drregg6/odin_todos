/*

This can be localStorage
Length should be limited to five

*/


const uuidv4 = require('uuid/v4');

module.exports = {
  folders: [
    {
      name: 'default',
      todos: [
        {
          title: 'Todo 1',
          desc: 'My todo 1',
          dueDate: '06/29/1989',
          priority: 'high',
          isComplete: false,
          folder: 'default',
          id: 4
        },
        {
          title: 'Todo 2',
          desc: 'My todo 2',
          dueDate: '06/29/1989',
          priority: 'low',
          isComplete: false,
          folder: 'default',
          id: 2
        },
        {
          title: 'Todo 3',
          desc: 'My todo 3',
          dueDate: '06/29/1989',
          priority: 'high',
          isComplete: false,
          folder: 'default',
          id: 6
        }
      ],
      id: '10'
    }
  ]
};