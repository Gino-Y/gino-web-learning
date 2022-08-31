<script setup>
import {ref} from 'vue'
import {NButton, NCard} from 'naive-ui'
let title = ref(0)
function play() {
  title.value += 1
}
</script>

<template>
  <div class="flex">
    <n-card class="card">{{title}}</n-card>
    <n-button class="button" @click="play">click me 🧡</n-button>
  </div>
</template>

<style scoped>
.flex{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  width: 50%;
}
.button{
  margin-top: 10px;
}
</style>