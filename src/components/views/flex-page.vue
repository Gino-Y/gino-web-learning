<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import CssFlexDefine from "../css-flex-define.vue";
import CssFlexDefineCode from "../css-flex-define.vue?raw";
import CssFlexDirection from "../css-flex-direction.vue";
import CssFlexDirectionCode from "../css-flex-direction.vue?raw";
import CssFlexOverflow from "../css-flex-overflow.vue";
import CssFlexOverflowCode from "../css-flex-overflow.vue?raw";
import CssFlexFlow from "../css-flex-flow.vue";
import CssFlexFlowCode from "../css-flex-flow.vue?raw";
import CssFlexJustify from "../css-flex-justify.vue";
import CssFlexJustifyCode from "../css-flex-justify.vue?raw";
import CssFlexAlign from "../css-flex-align.vue";
import CssFlexAlignCode from "../css-flex-align.vue?raw";
import CssFlexCenter from "../css-flex-center.vue";
import CssFlexCenterCode from "../css-flex-center.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'Flex Define 弹性盒模型定义'"
                 :file_name="'css-flex-define'"
                 :code='CssFlexDefineCode'
      >
        <css-flex-define/>
        <template #description>
          父组件设置flex，控制子元素<br>
          display: flex;<br>
          "border-width" 属性 如果单独使用则不起作用。要先使用 "border-style" 属性来设置边框。<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex Direction 排列方向'"
                 :file_name="'css-flex-direction'"
                 :code='CssFlexDirectionCode'
      >
        <css-flex-direction/>
        <template #description>
          flex-direction: 排列方式<br>
          row 横向<br>
          column 纵向<br>
          row-reverse 横向倒序<br>
          column-reverse 纵向倒序
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex Overflow 溢出'"
                 :file_name="'css-flex-overflow'"
                 :code='CssFlexOverflowCode'
      >
        <css-flex-overflow/>
        <template #description>
          flex-wrap: wrap 包裹折行<br>
          wrap-reverse 倒着折
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex flow 排列折行缩写'"
                 :file_name="'css-flex-flow'"
                 :code='CssFlexFlowCode'
      >
        <css-flex-flow/>
        <template #description>
          flex-flow: column wrap-reverse 纵向倒序折行<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex Justify 对齐'"
                 :file_name="'css-flex-justify'"
                 :code='CssFlexJustifyCode'
      >
        <css-flex-justify/>
        <template #description>
          justify-content 对齐内容<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex Align 交叉轴对齐'"
                 :file_name="'css-flex-align'"
                 :code='CssFlexAlignCode'
      >
        <css-flex-align/>
        <template #description>
          justify-content 对齐内容<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Flex Center 主轴交叉轴对齐'"
                 :file_name="'css-flex-center'"
                 :code='CssFlexCenterCode'
      >
        <css-flex-center/>
        <template #description>
          <!--                    justify-content 对齐内容<br>-->
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