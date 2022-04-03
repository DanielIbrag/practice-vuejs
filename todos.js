/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "My todos",
      todos: [],
    };
  },
  created: function () {
    this.loadTodos();
  },
  methods: {
    addTodo() {
      var todo = {
        userId: 1,
        id: 1,
        title: "Mop the floors",
        completed: false,
      };
      this.todos.push(todo);
    },
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
