<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import VueadvRouter from "../vueadv-router.vue";
import VueadvRouterCode from "../vueadv-router.vue?raw";
import VueadvRouter02 from "../vueadv-router02.vue";
import VueadvRouter02Code from "../vueadv-router02.vue?raw";
import VueadvRouter03 from "../vueadv-router03.vue";
import VueadvRouter03Code from "../vueadv-router03.vue?raw";
import VueadvRouter04 from "../vueadv-router04.vue";
import VueadvRouter04Code from "../vueadv-router04.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>
      <tip-block :tip_name="'VUE router 路由'"
                 :file_name="'vueadv-router'"
                 :code='VueadvRouterCode'
      >
        <vueadv-router/>
        <template #description>
          router-link 声明式<br>
          router.push('/home') 编程式
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE router 多级路由'"
                 :file_name="'vueadv-router02'"
                 :code='VueadvRouter02Code'
      >
        <vueadv-router02/>
        <template #description>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE router 动态配置'"
                 :file_name="'vueadv-router03'"
                 :code='VueadvRouter03Code'
      >
        <vueadv-router03/>
        <template #description>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE router 多出口配置'"
                 :file_name="'vueadv-router04'"
                 :code='VueadvRouter04Code'
      >
        <vueadv-router04/>
        <template #description>
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