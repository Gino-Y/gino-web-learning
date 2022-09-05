<script setup>
import {ref} from 'vue';
import {NButton, NCard} from "naive-ui";

let domChange = ref()
let text = ref('')

function changeDom() {
  domChange.value.style.color = 'red'
  domChange.value.focus()
}

function clear() {
  domChange.value.style.color = 'black'
  domChange.value.focus()
  text.value = ''
}
</script>

<template>
  <input class="size" type="text" placeholder="请输入信息" ref="domChange" v-model="text">
  <n-button class="button" @click="changeDom">变红且聚焦</n-button>
  <n-button class="button" @click="clear">清空</n-button>

  <n-card>
    {{text}}
  </n-card>
</template>

<style scoped>
.button{
  margin: 5px;
}
</style>