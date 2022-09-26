<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import VueadvAxios from "../vueadv-axios.vue";
import VueadvAxiosCode from "../vueadv-axios.vue?raw";
import VueadvAsync from "../vueadv-async.vue";
import VueadvAsyncCode from "../vueadv-async.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>
      <tip-block :tip_name="'VUE axios 异步同步化 前后交互'"
                 :file_name="'vueadv-axios'"
                 :code='VueadvAxiosCode'
      >
        <vueadv-axios/>
        <template #description>
          utils/request.js 公共拦截器<br>
          api/index.js 应用程序接口<br>
          数据 父传子 用这种
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE async 异步组件 前后交互'"
                 :file_name="'vueadv-async'"
                 :code='VueadvAsyncCode'
      >
        <vueadv-async/>
        <template #description>
          utils/request.js 公共拦截器<br>
          api/index.js 应用程序接口<br>
          数据 子组件中获得 无需父传子 用这种
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        4
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        5
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        6
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        4
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        5
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        6
      </div>
    </n-grid-item>

  </n-grid>
</template>

<style scoped>

</style>