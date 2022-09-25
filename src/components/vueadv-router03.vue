<script setup>
import {NCard, NButton} from 'naive-ui'
import {ref} from "vue";
const id = ref(88)

const items = ref([
  {
    title:'首页',
    url:'/home',
  },
  {
    title:'企业管理',
    url:'/manage',
  },
  {
    title:'列表管理',
    url:'/list/0',
  },
  {
    title:'用户信息',
    url:'/user',
    child:[
      {
        title:'用户详情',
        url:'/user/userInfo'
      },
      {
        title:'用户管理',
        url:'/user/userManage'
      },
    ]
  },
])
</script>

<template>
  <div class="out">
    <div class="in">
      <div class="vertical">
        <div v-for="item in items" :key="item.url">
          <router-link class="text" :to="item.url">{{item.title}}</router-link>

            <div v-for="sub in item.child" :key="sub.url">
              <router-link class="text" :to="sub.url">{{sub.title}}</router-link>
            </div>

        </div>
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