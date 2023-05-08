<script setup>
import { ref, computed } from 'vue'
import "./assets/main.css"

import TheHeader from './components/TheHeader.vue'
import TheHiddenBtn from './components/TheHiddenBtn.vue'

let id = 0
let hideCompleted = ref(true)

const headerClass = ref('header')
const mainClass = ref('main')
const footerClass = ref('footer')
const btnClass = ref("btn btn-secondary");
const searchClass = ref("form-control")
const formClass = ref("form")
const todosClass = ref("todos")
const checkboxClass = ref("checkbox")

const newTodo = ref('')
const todos = ref([])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <header :class="headerClass">
    <TheHeader />
  </header>
  <main :class="mainClass">
    <form :class="formClass" @submit.prevent="addTodo">
      <input :class="searchClass" v-model="newTodo">
      <button :class="btnClass">Add Todo</button>
    </form>
    <ul :class="todosClass">
      <li :class="{ done: todo.done }" v-for="todo in filteredTodos" :key="todo.id">
        <input :class="checkboxClass" type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button :class="btnClass" @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </main>
  <footer :class="footerClass">
    <TheHiddenBtn :btnClass="btnClass" @response="(msg) => hideCompleted = msg"/> 
  </footer>
</template>

<style>
.header,
.main,
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  cursor: default;
}

.header {
  padding-top: 40px;
}

.main {
  flex: 1 1 auto;

  justify-content: flex-start;
}

.footer {
  padding-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: row;
  
  padding-bottom: 20px;
}

.form .btn {
  margin-left: 6px;
  min-width: 100px;
}

.todos {
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  min-width: 200px;

  font-size: 20px;
  list-style: none;
}

li {
  margin: 4px;  

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 200px;
}

li span {
  margin: 0 auto 0 0;
}

li .btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 8px;

  width: 32px;
  height: 32px;

  font-size: 15px;
}

.checkbox {
  margin-right: 8px;
}

span.done {
  text-decoration: line-through;
}

</style>

