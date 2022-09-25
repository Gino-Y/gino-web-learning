<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import CssSelector from "../css-selector.vue";
import CssSelectorCode from "../css-selector.vue?raw";
import CssFont from "../css-font.vue";
import CssFontCode from "../css-font.vue?raw";
import CssFontOther from "../css-font-other.vue";
import CssFontOtherCode from "../css-font-other.vue?raw";
import CssMargin from "../css-margin.vue";
import CssMarginCode from "../css-margin.vue?raw";
import CssBorder from "../css-border.vue";
import CssBorderCode from "../css-border.vue?raw";
import CssMouse from "../css-mouse.vue";
import CssMouseCode from "../css-mouse.vue?raw";
import CssFloatBorder from "../css-float-border.vue";
import CssFloatBorderCode from "../css-float-border.vue?raw";
import CssChild from "../css-child.vue";
import CssChildCode from "../css-child.vue?raw";
import CssRelativeAbsolute from "../css-relative-absolute.vue";
import CssRelativeAbsoluteCode from "../css-relative-absolute.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'Selector 选择器与层级覆盖'"
                 :file_name="'css-selector'"
                 :code='CssSelectorCode'
      >
        <css-selector/>
        <template #description>
          这个样式例子中<br>
          p 标签选择器<br>
          .paragraph 类选择器<br>
          #paral ID选择器<br>
          标签P ➔ 类.paragraph ➔ ID#paral
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Font 字体'"
                 :file_name="'css-font'"
                 :code='CssFontCode'
      >
        <css-font/>
        <template #description>
          sans-serif 无衬线<br>
          serif 有衬线<br>
          可以属性连写
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Font 字体'"
                 :file_name="'css-font-other'"
                 :code='CssFontOtherCode'
      >
        <css-font-other/>
        <template #description>
          font-family: 字体<br>
          font-weight: 字粗<br>
          font-style: 字体样式<br>
          text-decoration: 文本修饰线<br>
          text-transform: 大小写转换<br>
          letter-spacing: 字间距<br>
          word-spacing: 词间距<br>
          line-height: 行间距<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Margin 外边距'"
                 :file_name="'css-margin'"
                 :code='CssMarginCode'
      >
        <css-margin/>
        <template #description>
          可简写<br>
          padding 用法相同
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Border 边框'"
                 :file_name="'css-border'"
                 :code='CssBorderCode'
      >
        <css-border/>
        <template #description>
          可简写<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Mouse 鼠标行为'"
                 :file_name="'css-mouse'"
                 :code='CssMouseCode'
      >
        <css-mouse/>
        <template #description>
          hover 经过<br>
          active 点击<br>
          user-select:none; 屏蔽选择
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Float&Border 浮动与边框'"
                 :file_name="'css-mouse'"
                 :code='CssFloatBorderCode'
      >
        <css-float-border/>
        <template #description>
          <b>float会使得默认纵向排列的方式更改为了横向排列，所以设置float后，一定要加清除浮动功能的标签</b>
          float 浮动<br>
          border 边框<br>
          box-sizing: border-box; 使用边框盒子作为宽度<br>
          clear:both 清除浮动
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Child 子元素伪类'"
                 :file_name="'css-child'"
                 :code='CssChildCode'
      >
        <css-child/>
        <template #description>
          :nth-child 子元素<br>
          odd 奇数<br>
          even 偶数<br>
          (3) 第三个元素<br>
          :first-child 第一个子元素<br>
          :last-child 最后一个子元素<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Relative&Absolute 相对与绝对位置'"
                 :file_name="'css-relative-absolute'"
                 :code='CssRelativeAbsoluteCode'
      >
        <css-relative-absolute/>
        <template #description>
          父节点设置了相对位置关系<br>
          子节点就会基于父节点做绝对偏移<br>
          否则会以整个网页做关系偏移<br>
          position 位置<br>
          relative 相对<br>
          absolute 绝对<br>
          fixed 固定  当前窗口固定
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