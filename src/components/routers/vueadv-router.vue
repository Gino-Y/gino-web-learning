<script setup>
import {NCard, NButton} from 'naive-ui'
import {ref} from "vue";
const id = ref(88)

</script>

<template>
  <div class="out">
    <div class="in">
      <div class="vertical">
        <router-link class="text" to="/vue/router/home">首页</router-link>
        <router-link class="text" to="/vue/router/manage">企业管理</router-link>
        <router-link class="text" :to="{name: 'home'}">首页</router-link>
        <router-link class="text" :to="{name: 'manage'}">企业管理</router-link>
        <router-link class="text" to="/vue/router/list/999">列表管理</router-link>
        <router-link class="text" :to="`/vue/router/list/${id}`">列表管理</router-link>
        <router-link class="text" :to="{name: 'list', params:{id: 106}}">列表管理</router-link>
      </div>
    </div>
    <div class="in">
      <n-card>
        <router-view/>
      </n-card>
    </div>
  </div>

</template>

<style scoped>
.vertical{
  width: 70px;
  display: flex;
  flex-direction: column;
}
.out{
  display: flex;
}
.text{
  text-decoration: none;
}
</style>