<script setup>
import { ref, computed } from 'vue'
import "./assets/main.css"

import TheHeader from './components/TheHeader.vue'
import TheHiddenBtn from './components/TheHiddenBtn.vue'

let id = 0
let hideCompleted = ref(true)

// classes
const containerClass = ref('container')
const navClass = ref("navbar bg-body-tertiary");
const inputContainerClass = ref("container-fluid");
const formClass = ref("d-flex");
const inputClass = ref("form-control me-2");
const btnClass = ref("btn btn-secondary");
const todosClass = ref("list-group");
const todoClass = ref("list-group-item");
const checkInputClass = ref("form-check-input me-1");
const todoBoxClass = ref("input-label-box");
const checkInputLabelClass = ref("form-check-label");
const closeBtnClass = ref("btn-close");

// texts
const btnText = ref("Add");

// other
const newTodo = ref('')
const todos = ref([])

const newTodos = computed(() => {
  return [].concat(todos.value.filter((t) => t.done === false), todos.value.filter((t) => t.done === true));
})

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? newTodos.value.filter((t) => !t.done)
    : newTodos.value
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
  <header :class="containerClass">
    <TheHeader />
  </header>
  <main :class="containerClass">
    <div :class="navClass">
      <div :class="inputContainerClass">
        <form :class="formClass" @submit.prevent="addTodo">
          <input
            :class="inputClass" v-model="newTodo"
          />
          <button :class="btnClass" type="submit" @onClick={addTodo}>
            {{ btnText }}
          </button>
        </form>
      </div>
    </div>
    <ul :class="todosClass">
        <li :class="todoClass" v-for="todo in filteredTodos" :key="todo.id">
          <div :class="todoBoxClass">
            <input
              :class="checkInputClass"
              type="checkbox" v-model="todo.done"
            />
            <label :class="checkInputLabelClass">
              {{todo.text}}
            </label>
          </div>
          <button
            type="button"
            :class="closeBtnClass"
            @click="removeTodo(todo)"
            ></button>
        </li>
    </ul>
  </main>
  <footer :class="containerClass">
    <TheHiddenBtn :btnClass="btnClass" @response="(msg) => hideCompleted = msg"/> 
  </footer>
</template>

