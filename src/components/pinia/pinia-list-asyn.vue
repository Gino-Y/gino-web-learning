<script setup>
import {NButton, NEllipsis, NTable} from 'naive-ui'

import {listStore} from "../../store/list"; // 导入状态管理
import {storeToRefs} from 'pinia'
const myListStore = listStore() // 实例化状态管理
const {items} = storeToRefs(myListStore); //
// 异步请求
function query(){
  myListStore.getData()
}

</script>

<template>
  <n-button @click="query">Query Data</n-button>
  <n-table :bordered="false" :single-line="false" size="small">
    <tr>
      <th>Item</th>
      <th>Name</th>
      <th>Price</th>
      <th>Operation</th>
    </tr>
    <tr v-for="(item, index) in items" :key="item.product_id">
      <td>{{index + 1}}</td>
      <td>
        <n-ellipsis style="max-width: 60px; font-size: small;">
          {{item.product_name}}
        </n-ellipsis>
      </td>
      <td>{{item.product_uprice}}</td>
      <td><n-button>add</n-button></td>
    </tr>
  </n-table>
</template>

<style scoped>

</style>