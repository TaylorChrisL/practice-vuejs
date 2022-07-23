/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response);
        this.todos = response.data;
      });
    },
    pushTodo: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: 1,
          title: "Not a good title",
          completed: false,
        })
        .then(function (response) {
          console.log(response.data);
          this.todos.push(response.data);
        });
    },
  },
  beforeMount() {
    this.loadTodos();
  },
};

Vue.createApp(App).mount("#app");
