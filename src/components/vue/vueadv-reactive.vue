<script setup>
import {NButton, NTag, NCard} from 'naive-ui'
import {reactive} from 'vue'
const list = reactive([
  // {id: 1, name: 'itlove1'},
  // {id: 2, name: 'itlove2'},
  // {id: 3, name: 'itlove3'},
])

const obj = reactive({id: 0, name:'请输入名字'})

function action() {
  let maxID = list.length > 0 ? Math.max(...list.map(v=>v.id)) +1 : 1
  list.push({id:maxID, name: obj.name})
}
</script>

<template>
  <input type="text" v-model="obj.name"/>
  <n-button @click="action">输入玩家</n-button>

  <n-tag :bordered="false" type="success" style="margin: 3px" class="name" v-for="v in list" :key="v.id">
    <span>玩家: </span>
    {{v.name}}
    <span>ID: </span>
    {{v.id}}
  </n-tag>
</template>

<style scoped>
span{
  color: red;
}
</style>