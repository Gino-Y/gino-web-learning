<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

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

      <tip-block :tip_name="'VUE defineProps 组件及传参_父->子'"
                 :file_name="'num'"
                 :code='NumCode'
      >
        <vueadv-defineprops/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE emission 组件及传参_子->父'"
                 :file_name="'vueadv-emits'"
                 :code='VueadvEmitsCode'
      >
        <vueadv-emits/>
        <template #description>

        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>
      <tip-block :tip_name="'VUE Compoent 动态组件'"
                 :file_name="'vueadv-compoent'"
                 :code='VueadvCompoentCode'
      >
        <vueadv-compoent/>
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