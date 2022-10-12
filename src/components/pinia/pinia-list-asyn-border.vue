<script setup>
import {NButton, NEllipsis} from 'naive-ui'
import {ref} from 'vue'
import {listStore} from "../../store/list"; // 导入状态管理
import {storeToRefs} from 'pinia'
import {mainStore} from "../../store";
const myListStore = listStore() // 实例化状态管理

let items = ref([
  {product_id: 1, product_name: 'Abc', product_uprice: 123},
  {product_id: 2, product_name: 'Def', product_uprice: 456},
  {product_id: 3, product_name: 'Ghi', product_uprice: 789},
])

// 异步请求
async function query(){
  let res = await myListStore.getData()
  items.value = res.data.data
}
</script>

<template>
  <n-button @click="query">Query Data</n-button>
  <table border="1">
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
  </table>
</template>

<style scoped>

</style>