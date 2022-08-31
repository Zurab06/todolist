const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) this.print(i);
  },

  add: function (neuText) {
    todoList.items.unshift({ text: neuText });
  },

  remove: function (del) {
    todoList.items.splice(del, 1);
  },

  print: function (ind) {
    if (todoList.items[ind].completed === true) {
      console.log("[x]" + todoList.items[ind].text);
    } else {
      console.log("[]" + todoList.items[ind].text);
    }
  },

  complete: function (int) {
    todoList.items[int].completed = true;
  },
};
