<script setup>
import {NButton, NCard} from 'naive-ui'
import { ref } from 'vue'

const num = ref(0)
const items = ref([
  {id:1, title:'新闻', content:'新闻头条消息。'},
  {id:2, title:'热点', content:'热点娱乐资讯。'},
  {id:3, title:'实时', content:'实时头条消息。'},
  {id:4, title:'推荐', content:'推荐热门资讯。'}
])
function action(i) {
  num.value = i
}
</script>

<template>

  <n-card class="card">

    {{num}}

    <div v-for="(item, i) in items" :key="item.id" v-show="num===i">
      {{item.content}}
    </div>

  </n-card>

  <div class="b">
    <n-button  v-for="(v, i) in items" :key="v.id" :class="{active:num===i}" @click="action(i)">{{v.title}}</n-button>
  </div>
</template>

<style scoped>
.b{
  margin-top: 10px;
  display: flex;
  justify-content: start;
}
</style>