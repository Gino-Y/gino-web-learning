<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import VueVfor from "../vue/vue-vfor.vue";
import VueVforCode from "../vue/vue-vfor.vue?raw";
import VueVif from "../vue/vue-vif.vue";
import VueVifCode from "../vue/vue-vif.vue?raw";
import VueVtest from "../vue/vue-vtest.vue";
import VueVtestCode from "../vue/vue-vtest.vue?raw";
import VueVon from "../vue/vue-von.vue";
import VueVonCode from "../vue/vue-von.vue?raw";
import VueVbind from "../vue/vue-vbind.vue";
import VueVbindCode from "../vue/vue-vbind.vue?raw";
import VueVmodel from "../vue/vue-vmodel.vue";
import VueVmodelCode from "../vue/vue-vmodel.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'VUE v-for 迭代指令'"
                 :file_name="'vue-vfor'"
                 :code='VueVforCode'
      >
        <vue-vfor/>
        <template #description>
          :key='index' 每次都要加不够麻烦的<br>
          item 条目<br>
          index 指针<br>
          key 键<br>
          value 值<br>
          注意对象关系是反的
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE v-if v-show 分支指令'"
                 :file_name="'vue-vfor'"
                 :code='VueVifCode'
      >
        <vue-vif/>
        <template #description>
          低频用v-if<br>
          高频用v-show<br>
          v-show 不支持template元素
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE v-text v-html'"
                 :file_name="'vue-vtest'"
                 :code='VueVtestCode'
      >
        <vue-vtest/>
        <template #description>
          没鸡巴用吧
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE v-on 绑定监听事件'"
                 :file_name="'vue-von'"
                 :code='VueVonCode'
      >
        <vue-von/>
        <template #description>
          @ 缩写<br>
          v-on:事件/@事件<br>
          事件：play()<br>
          @click="play()"如果没有实参可以写成@click="play"<br>
          @dblclick 双击<br>
          @mouseover 移入<br>
          @mouseout 移出<br>
          @keydown.enter 键盘事件 .+按键<br>
          <hr>
          .stop ——调用 event.stopPropagation()。<br>
          .prevent ——调用 event.preventDefault()。<br>
          .capture ——在捕获模式添加事件监听器。<br>
          .self ——只有事件从元素本身发出才触发处理函数。<br>
          .{keyAlias} ——只在某些按键下触发处理函数。
          .once ——最多触发一次处理函数。<br>
          .left ——只在鼠标左键事件触发处理函数。<br>
          .right ——只在鼠标右键事件触发处理函数。<br>
          .middle ——只在鼠标中键事件触发处理函数。<br>
          .passive ——通过 { passive: true } 附加一个 DOM 事件。<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE v-bind 绑定'"
                 :file_name="'vue-vbind'"
                 :code='VueVbindCode'
      >
        <vue-vbind/>
        <template #description>
          : 缩写<br>
          样式名 双层引号<br>
          函数括号不能省略
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'VUE v-model 双向绑定'"
                 :file_name="'vue-vmodel'"
                 :code='VueVmodelCode'
      >
        <vue-vmodel/>
        <template #description>
          这玩应一般就用在input里<br>
          复选框可以指定value值<br>
          单选框记得加name且值相同<br>
          下拉单指定value就使用value<br>
          <hr>
          .lazy ——监听 change 事件而不是 input<br>
          .number ——将输入的合法符串转为数字<br>
          .trim ——移除输入内容两端空格<br>
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