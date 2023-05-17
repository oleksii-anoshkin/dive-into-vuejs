<script setup>
import { ref } from 'vue';
import TopBar from './components/TopBar.vue';
import UserOutput from './components/UserOutput.vue';
import Buttons from './components/Buttons.vue';

// classes
let history = ref([]);
let result = ref("0");
let colorTheme = ref("dark");
const rowClass = ref("row");
const colClass = ref("col");
const colAutoClass = ref("col-md-auto");
const calcClass = ref("container-fluid");
</script>

<template>
      <div class="container text-center" :class="colorTheme">
        <div :class="rowClass">
          <div :class="colClass"></div>
          <div :class="colAutoClass">
              <div :class="calcClass">
                <TopBar :color="colorTheme" @response="(msg) => colorTheme = msg"/>
                <UserOutput :history="history" :result="result"/>
                <Buttons :history="history" :result="result" @response="(msg) => { history = msg.history; result = msg.result }"/>
              </div>
          </div>
          <div :class="colClass"></div>
        </div>
      </div>
</template>