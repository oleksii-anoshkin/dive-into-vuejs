import { createApp } from "vue";

let id = 0;

createApp({
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [],
    };
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos;
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
}).mount("#app");
