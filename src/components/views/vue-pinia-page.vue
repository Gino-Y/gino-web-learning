<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import HtmlHeader from "../html/html-header.vue";
import HtmlHeaderCode from "../html/html-header.vue?raw";
import Pinia from "../pinia/pinia.vue";
import PiniaCode from "../pinia/pinia.vue?raw";
import PiniaListAsyn from "../pinia/pinia-list-asyn.vue";
import PiniaListAsynCode from "../pinia/pinia-list-asyn.vue?raw";
import PiniaListAsynBorder from "../pinia/pinia-list-asyn-border.vue";
import PiniaListAsynBorderCode from "../pinia/pinia-list-asyn-border.vue?raw";


</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'pinia'"
                 :file_name="'pinia'"
                 :code='PiniaCode'
      >
        <pinia/>
        <template #description>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'pinia 异步请求'"
                 :file_name="'pinia-list-asyn'"
                 :code='PiniaListAsynCode'
      >
        <pinia-list-asyn/>
        <template #description>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'pinia 异步请求'"
                 :file_name="'pinia-list-asyn-border'"
                 :code='PiniaListAsynBorderCode'
      >
        <pinia-list-asyn-border/>
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