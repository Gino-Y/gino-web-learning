<script setup>
import {ref} from 'vue'
let flag = ref(false)
function action() {
  return 'red'
}
</script>

<template>
  <div :class="action()">v-bind</div>
  <div :class="'red'">v-bind</div>
  <div :class="flag?'red':'green1'">v-bind</div>
  <div :class="{'red':flag}">v-bind</div>

  <input type="checkbox" v-model="flag" >{{flag}}
  <input type="text" :disabled="flag">
</template>

<style scoped>
.red{
  color: red;
}
.green1{
  color: green;
}
</style>