<script setup>
import {
  NGrid,
  NGridItem,
} from 'naive-ui'
import TipBlock from "../elements/tip-block.vue";

import HtmlHeader from "../html-header.vue";
import HtmlHeaderCode from "../html-header.vue?raw";
import HtmlParagraph from "../html-paragraph.vue";
import HtmlParagraphCode from "../html-paragraph.vue?raw";
import HtmlHyperlink from "../html-hyperlink.vue";
import HtmlHyperlinkCode from "../html-hyperlink.vue?raw";
import HtmlImage from "../html-image.vue";
import HtmlImageCode from "../html-image.vue?raw";
import HtmlTable from "../html-table.vue";
import HtmlTableCode from "../html-table.vue?raw";
import HtmlList from "../html-list.vue";
import HtmlListCode from "../html-list.vue?raw";
import HtmlBlock from "../html-block.vue";
import HtmlBlockCode from "../html-block.vue?raw";
import HtmlInline from "../html-inline.vue";
import HtmlInlineCode from "../html-inline.vue?raw";

</script>

<template>
  <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
    <n-grid-item>

      <tip-block :tip_name="'Headline 标题标签'"
                 :file_name="'html-header'"
                 :code='HtmlHeaderCode'
      >
        <html-header/>
        <template #description>
          h1 最大<br>
          h5 最小<br>
          br 换行
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Paragraph 段落标签'"
                 :file_name="'html-paragraph'"
                 :code='HtmlParagraphCode'
      >
        <html-paragraph/>
        <template #description>
          段落标签会自动换行<br>
          且行间距比较大<br>
          p 段落<br>
          hr 分割线<br>
          br 段落内换行
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Hyperlink 超链接标签'"
                 :file_name="'html-hyperlink'"
                 :code='HtmlHyperlinkCode'
      >
        <html-hyperlink/>
        <template #description>
          a 超链接<br>
          href="" 设置地址<br>
          target="_blank" 新窗口打开
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Image 图片标签'"
                 :file_name="'html-image'"
                 :code='HtmlImageCode'
      >
        <html-image/>
        <template #description>
          只有单标签<br>
          img 图片<br>
          src="" 设置地址<br>
          alt="展示的图片" 预备文本——图片失效时展示的文字<br>
          width="230" 宽度<br>
          height="150" 高度<br>
          高度通常不需要设置即可等比缩放
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Table 表格标签'"
                 :file_name="'html-table'"
                 :code='HtmlTableCode'
      >
        <html-table/>
        <template #description>
          table 表格<br>
          border 边框<br>
          tr 行元素<br>
          td 列元素<br>
          th 表头<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'List 列表标签'"
                 :file_name="'html-list'"
                 :code='HtmlListCode'
      >
        <html-list/>
        <template #description>
          ol 有序列表<br>
          ul 无序列表<br>
          li 列表元素<br>
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Block 区块元素'"
                 :file_name="'html-block'"
                 :code='HtmlBlockCode'
      >
        <html-block/>
        <template #description>
          通常会以新行开始<br>
          div 区块容器
        </template>

      </tip-block>
    </n-grid-item>
    <n-grid-item>

      <tip-block :tip_name="'Inline 内联元素'"
                 :file_name="'html-inline'"
                 :code='HtmlInlineCode'
      >
        <html-inline/>
        <template #description>
          不会以新行开始<br>
          span 内联容器<br>
          b 粗体文本
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