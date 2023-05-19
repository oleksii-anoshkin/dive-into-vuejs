<script setup>
import { ref } from 'vue'

// classes
const navClass = ref("navbar bg-body-tertiary");
const containerClass = ref("container-fluid");
const titleClass = ref("navbar-brand h1");

// texts
const titleText = ref("TODO List");
</script>

<template>
      <nav :class="navClass">
        <div :class="containerClass">
          <span :class="titleClass">{{ titleText }}</span>
        </div>
      </nav>
</template>
