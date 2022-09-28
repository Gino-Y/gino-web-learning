<script setup>
import {NCard, NButton} from 'naive-ui'
import {onMounted, ref} from "vue";
const id = ref(88)
const msg = ref('签到')

onMounted(()=>{
  msg.value = !sessionStorage.getItem('sign')?'签到':'已签到'
})

function sign() {
  msg.value = '已签到'
  sessionStorage.setItem('sing', true)
}
</script>

<template>
  <div class="out">
    <div class="in">
      <div class="vertical">
        <router-link class="text" to="/vue/router/home">首页</router-link>
        <router-link class="text" to="/vue/router/user">用户信息</router-link>
        <router-link class="text" to="/vue/router/user/userInfo">用户详情</router-link>
        <router-link class="text" to="/vue/router/user/userManage">用户管理</router-link>
        <router-link class="text" to="/vue/router/guard">路由守卫</router-link>
      </div>
    </div>
    <div class="in">
      <n-card>
        <router-view/>
      </n-card>
      <n-button @click="sign()">{{ msg }}</n-button>
    </div>
  </div>

</template>

<style scoped>
.vertical{
  /*width: 70px;*/
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