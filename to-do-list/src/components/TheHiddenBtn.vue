<script setup>
import { reactive, ref } from 'vue'

let hideCompleted = ref(true);
let message = reactive({ text: "Show all" });

const firstContainerClass = ref("navbar bg-body-tertiary");
const secondContainerClass = ref("container-fluid");
const thirdContainerClass = ref("d-flex");
const btnClass = ref("btn btn-secondary");

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
      <div :class="firstContainerClass">
        <div :class="secondContainerClass">
          <div :class="thirdContainerClass">
            <button :class="btnClass" @click="response(hideCompleted)">
              {{ message.text }}
            </button>
          </div>
        </div>
      </div>
</template>