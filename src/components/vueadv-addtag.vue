<script setup>
import {NButton, NTag, NCard} from 'naive-ui'
import {ref} from 'vue'

const arr = ref([])

function add() {
  arr.value.push({title:'标题', id:arr.value.length+1})
  // console.log(arr.value)
}
</script>

<template>
  <n-button @click="add">添加标签</n-button>
  <div class="b">
    <n-card>
      <n-tag style="margin: 3px" :bordered="false" v-for="(item, index) in arr" :key="item.id">{{item.title}} {{index+1}}</n-tag>
    </n-card>
  </div>
</template>

<style scoped>
.b{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>