<script setup>
import {ref} from 'vue'
import {NButton, NCard} from 'naive-ui'

let num = ref(100)

function change() {
  num.value-=1;
}
</script>

<template>
  <n-card class="card">{{num}}</n-card>
  <div class="b">
    <n-button class="button" @click="num+=1">响应式：+</n-button>
    <n-button class="button" @click="change">函数方法：-</n-button>
  </div>
</template>

<style scoped>
.b{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>