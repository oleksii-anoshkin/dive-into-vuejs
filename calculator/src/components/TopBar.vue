<script setup>
import { ref } from 'vue';

// input
const props = defineProps({
  color: String
})

// output
const emit = defineEmits(['response']);

// classes
const containerClass = ref("top__bar");
const boxClass = ref("top__box");
const titleClass = ref("top__text");
const icoClass = ref("material-symbols-outlined");
const btnClass = ref("material-symbols-outlined");
const btnType = ref("button");

// texts
const titleText = ref("Calculator");
const icoText = ref("calculate");
const btnText = ref("model_training");

function response(color) {
  emit('response', color === "dark" ? "light" : "dark");
}
</script>

<template>
  <div :class="containerClass">
    <div :class="boxClass">
      <span :class="icoClass">{{icoText}}</span>
      <p :class="titleClass">{{titleText}}</p>
    </div>
      <button
      :class="btnClass"
      :type="btnType"
      @click="response(color)">
      {{ btnText }}
    </button>
  </div>
</template>