<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import VueadvRef from "../vue/vueadv-ref.vue";
import VueadvRefCode from "../vue/vueadv-ref.vue?raw";
import VueadvTab1 from "../vue/vueadv-tab1.vue";
import VueadvTab1Code from "../vue/vueadv-tab1.vue?raw";
import VueadvTab2 from "../vue/vueadv-tab2.vue";
import VueadvTab2Code from "../vue/vueadv-tab2.vue?raw";
import VueadvAddtag from "../vue/vueadv-addtag.vue";
import VueadvAddtagCode from "../vue/vueadv-addtag.vue?raw";
import VueadvReactive from "../vue/vueadv-reactive.vue";
import VueadvReactiveCode from "../vue/vueadv-reactive.vue?raw";
import VueadvReftest from "../vue/vueadv-reftest.vue";
import VueadvReftestCode from "../vue/vueadv-reftest.vue?raw";
import VueadvComputed02 from "../vue/vueadv-computed02.vue";
import VueadvComputed02Code from "../vue/vueadv-computed02.vue?raw";
import VueadvComputed from "../vue/vueadv-computed.vue";
import VueadvComputedCode from "../vue/vueadv-computed.vue?raw";
import VueadvWatch from "../vue/vueadv-watch.vue";
import VueadvWatchCode from "../vue/vueadv-watch.vue?raw";
import VueadvWatch02 from "../vue/vueadv-watch02.vue";
import VueadvWatch02Code from "../vue/vueadv-watch02.vue?raw";
import VueadvDefineprops from "../vue/vueadv-defineprops.vue";
import NumCode from "../elements/num.vue?raw";
import VueadvEmits from "../vue/vueadv-emits.vue";
import VueadvEmitsCode from "../vue/vueadv-emits.vue?raw";
import VueadvCompoent from "../vue/vueadv-compoent.vue";
import VueadvCompoentCode from "../vue/vueadv-compoent.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'VUE ref 响应式与函数式'"
                 :file_name="'vueadv-ref'"
                 :code='VueadvRefCode'
      >
        <vueadv-ref/>
        <template #description>
          ref(100) 响应数据
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE setup 语法糖'"
                 :file_name="'vueadv-tab1'"
                 :code='VueadvTab1Code'
      >
        <vueadv-tab1/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE setup 语法糖'"
                 :file_name="'vueadv-tab2'"
                 :code='VueadvTab2Code'
      >
        <vueadv-tab2/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE setup 语法糖'"
                 :file_name="'vueadv-addtag'"
                 :code='VueadvAddtagCode'
      >
        <vueadv-addtag/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE reactive函数'"
                 :file_name="'vueadv-reactive'"
                 :code='VueadvReactiveCode'
      >
        <vueadv-reactive/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE ref DOM引用'"
                 :file_name="'vueadv-reftest'"
                 :code='VueadvReftestCode'
      >
        <vueadv-reftest/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE computed 计算属性'"
                 :file_name="'vueadv-computed02'"
                 :code='VueadvComputed02Code'
      >
        <vueadv-computed02/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE computed 计算属性'"
                 :file_name="'vueadv-computed'"
                 :code='VueadvComputedCode'
      >
        <vueadv-computed/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE watch 监听'"
                 :file_name="'vueadv-watch02'"
                 :code='VueadvWatch02Code'
      >
        <vueadv-watch02/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE watch 监听和清除监听'"
                 :file_name="'vueadv-watch'"
                 :code='VueadvWatchCode'
      >
        <vueadv-watch/>
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