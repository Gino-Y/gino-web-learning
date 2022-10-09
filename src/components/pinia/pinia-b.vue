<script setup>
import {mainStore} from "../../store";
import {storeToRefs} from "pinia";
const store = mainStore()
const {title, count, getCount} = storeToRefs(store) // 解构且响应式
</script>

<template>
  <div style="color: red">其他组件:数量：{{count}}</div>
</template>

<style scoped>

</style>