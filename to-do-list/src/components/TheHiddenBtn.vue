<script setup>
import { reactive, ref } from 'vue'

let hideCompleted = ref(true);
let message = reactive({ text: "Show all" });

const props = defineProps({
  btnClass: String
})

const emit = defineEmits(['response']);

function response(prop) {
  hideCompleted = !prop
  emit('response', hideCompleted)
  hideCompleted ? message.text = 'Show all' : message.text = 'Hide completed'
}
</script>

<template>
  <button :class="btnClass" @click="response(hideCompleted)">
    {{ message.text }}
  </button>
</template>

<style>
footer.btn-secondary {
  margin-left: 4px;

  width: 160px;
}
</style>