/*

This can be localStorage
Length should be limited to five

*/
const uuidv4 = require('uuid/v4');

module.exports = {
  folders: [
    {
      name: "default",
      todos: [
        {
          title: "Take out trash",
          desc: "Remove trash from every room and bring outside",
          dueDate: "09/14/2019",
          priority: "high",
          folder: "default",
          isComplete: false
        },
        {
          title: "Walk dog",
          desc: "Get Sophie walkin' and poopin'",
          dueDate: "09/20/2019",
          priority: "high",
          folder: "default",
          isComplete: false
        },
        {
          title: "Meal prep",
          desc: "Lunches need to be made for the week",
          dueDate: "09/10/2019",
          priority: "medium",
          folder: "default",
          isComplete: false
        }
      ],
      id: uuidv4()
    },
    {
      name: "javascript",
      todos: [
        {
          title: "TODOs App",
          desc: "Complete the TODO App",
          dueDate: "10/01/2019",
          priority: "medium",
          folder: "javascript",
          isComplete: false
        },
        {
          title: "Work on Algorithms",
          desc: "Algorithms need to be completed by interviews",
          dueDate: "12/30/2019",
          priority: "low",
          folder: "javascript",
          isComplete: false
        },
        {
          title: "Weather App",
          desc: "Begin work on the weather app using React and APIs",
          dueDate: "11/01/2019",
          priority: "low",
          folder: "javascript",
          isComplete: false
        }
      ],
      id: uuidv4()
    },
    {
      name: "ruby",
      todos: [
        {
          title: "Pick up syntax",
          desc: "Syntax should be similar to Javascript. Take a look and learn a little",
          dueDate: "10/31/2019",
          priority: "low",
          folder: "ruby",
          isComplete: false
        },
        {
          title: "Ruby on Rails",
          desc: "Practice a Rails app",
          dueDate: "11/01/2019",
          priority: "low",
          folder: "ruby",
          isComplete: false
        }
      ],
      id: uuidv4()
    }
  ],
  folder: null,
  todos: [],
  todo: null
}