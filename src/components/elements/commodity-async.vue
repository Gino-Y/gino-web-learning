<script setup>
import {NEllipsis, NScrollbar, NGrid, NGridItem} from 'naive-ui'
import {ref} from "vue";

import {getList} from '../../api'

const lists = ref([]); //列表数据
const res = await getList()
lists.value = res.data.data

// const lists = await getList().then(res=>res.data.data)

</script>

<template>
  <n-scrollbar style="max-height: 205px;" >
    <n-grid :x-gap="4" :y-gap="8" cols="100:1 200:2 300:3 400:4 500:5">
      <n-grid-item v-for="v in lists" :key="v.product_id">
        <div class="plan" >
            <img :src="v.product_img_url"/>
          <div>
            <n-ellipsis style="max-width: 70%; margin-left: 20px; font-size: small; color: black">
              {{v.product_name}}
            </n-ellipsis>
            <div style="margin-left: 20%; color: black">
              <i>￥</i>
              <b>{{v.product_uprice}}</b>
            </div>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </n-scrollbar>
</template>

<style scoped>
.plan{
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
}
img{
  width: 100%;
}
</style>