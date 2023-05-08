<script setup>
import { ref } from 'vue'

const massage = ref("TO-DO list");
const titleClass = ref("badge bg-secondary");
</script>

<template>
  <h1>
    <span :class="titleClass">{{ massage }}</span>
  </h1>
</template>
