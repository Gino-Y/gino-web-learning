<script setup>
import {NScrollbar, NGrid, NGridItem} from 'naive-ui'
import {ref, onMounted} from "vue";
import Commodity from '../elements/commodity.vue'

import {getData} from '../../api'

const lists = ref([]); //列表数据

onMounted(async()=>{
  let res = await getData();
  let {data} = res.data;
  lists.value = data; //数据存到上面的列表数据中
})

</script>

<template>
    <n-scrollbar style="max-height: 205px;" >
      <n-grid :x-gap="4" :y-gap="8" cols="100:1 200:2 300:3 400:4 500:5">

        <n-grid-item v-for="v in lists" :key="v.product_id">
          <commodity
              :src="v.product_img_url"
              :title="v.product_name"
              :price=v.product_uprice
          />
        </n-grid-item>

      </n-grid>

    </n-scrollbar>
</template>

<style scoped>

</style>