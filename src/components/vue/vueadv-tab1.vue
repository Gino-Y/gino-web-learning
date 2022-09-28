

<script setup>
import {ref} from 'vue'
import {NButton, NCard} from 'naive-ui'

let num = ref(1)
const active = ref(false);

function change() {
  num.value-=1;
}
</script>

<template>
  <n-card class="card">{{num}}</n-card>
  <div class="tab-con">
    <div v-show="num===1">新闻内容</div>
    <div v-show="num===2">热点资讯</div>
  </div>
  <div class="b">
    <n-button :class="{active:num===1}" @click="num = 1">新闻</n-button>
    <n-button :class="{active:num===2}" @click="num = 2">热点</n-button>
  </div>
</template>

<style scoped>
.b{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>







