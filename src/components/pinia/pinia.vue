<script setup>
import {NButton} from 'naive-ui'
import {computed, ref} from "vue";
import {mainStore} from "../../store"; // 导入状态管理
import {storeToRefs} from 'pinia'
import PiniaB from "./pinia-b.vue"; // 使普通对象变为相应对象

const store = mainStore() // 实例化状态管理
// const {title, count} = mainStore() // 实例化状态管理
const {title, count, getCount} = storeToRefs(store) // 解构且响应式

const c = computed(()=>store.getCount)

// 修改状态数据
function handleClick() {
  store.addCount(9)
}

function clear() {

}

</script>

<template>
  <pinia-b/>
<!--  <div>标题: {{store.title}}</div>-->
<!--  <div>数量: {{store.count}}</div>-->
  <div>标题: {{title}}</div>
  <div>数量: {{count}}</div>
  <div>计算属性: {{getCount}}</div>
  <div>计算属性: {{c}}</div>
  <hr>
  <n-button @click="handleClick">Click me!</n-button>
  <n-button @click="clear">重置持久化</n-button>
</template>

<style scoped>

</style>