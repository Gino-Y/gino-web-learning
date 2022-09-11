<script setup>
import {ref, reactive, computed} from "vue";
import {NTag} from 'naive-ui'
import Emits_sub from "./elements/emits_sub.vue";

let title = ref('查看详情')
let msg = ref('父组件数据')

function myclick(v) { // 接收子的行为 v就是子传过来的数据
  msg.value = v
}
</script>

<template>
  <emits_sub @subClick="myclick"/><br>
  上面按钮是子组件按钮<br>
  下面的展示框是父组件，<br>
  其中响应后的数据是子组件中的数据
  <n-tag size="large" :bordered="false" >父组件展示的: {{msg}}</n-tag>
</template>

<style scoped>

</style>