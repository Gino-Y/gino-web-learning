<script setup>
import {NCard, NButton} from 'naive-ui'
import {useRouter, useRoute} from 'vue-router'
const router = useRouter() // 实例化路由

function goBack(){
  // router.push('/home')
  // router.push({path:'/home', query: {name: 10}})
  router.push({name:'home', query: {name: 100}})
}
</script>

<template>
  <div>manage</div>
  <n-button @click="goBack">回到首页</n-button><br>
  <router-link to="/vue/router/home?name='Gino'">回到首页-通过query传参</router-link>
  <router-link :to="{path:'/vue/router/home', query:{name:'Tina'}}">回到首页-通过query传参</router-link>
</template>

<style scoped>

</style>