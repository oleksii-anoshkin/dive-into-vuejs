<script setup>
import { ref } from 'vue';

// input
const props = defineProps({
  result: String,
  history: Array
})

// classes
const containerClass = ref("numbers__container");
const topBoxNumbersClass = ref("numbers__top");
const botBoxNumbersClass = ref("numbers__bot");
const topNumbersClass = ref("numbers__top-text");
const botNumbersClass = ref("numbers__bot-text");
</script>

<template>
      <div :class="containerClass">
        <div :class="topBoxNumbersClass">
          <p :class="topNumbersClass">{{history.join(" ")}}</p>
        </div>
        <div :class="botBoxNumbersClass">
          <p :class="botNumbersClass">
            {{result.length > 11
              ? String(Number(result).toExponential(6))
              : result}}
          </p>
        </div>
      </div>
</template>