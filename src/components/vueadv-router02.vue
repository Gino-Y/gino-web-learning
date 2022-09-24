<script setup>
import {NCard, NButton} from 'naive-ui'
import {ref} from "vue";
const id = ref(88)

</script>

<template>
  <div class="out">
    <div class="in">
      <div class="vertical">
        <router-link class="text" to="/user">用户信息</router-link>
        <router-link class="text" to="/user/userInfo">用户详情</router-link>
        <router-link class="text" to="/user/userManage">用户管理</router-link>
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
  //background-color: #3b0749;
}
.out{
  display: flex;
}
.text{
  text-decoration: none;
}
</style>