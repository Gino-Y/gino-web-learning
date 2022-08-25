<script setup>
import { darkTheme,  } from "naive-ui";
import {
    NConfigProvider,
    NCard,
    NSpace,
    NButton,
    NTag,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NAnchor,
    NAnchorLink,
    NPagination,
    NGrid,
    NGridItem,
    NPageHeader,
    NMenu,
    NScrollbar,
    NSwitch
} from 'naive-ui'

import { ref } from "vue";
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import HelloWorld from './components/HelloWorld.vue'
import ThemeSwitch from "./components/theme_switch.vue";
import HtmlHeader from "./components/html-header.vue";
import HtmlHeaderCode from "./components/html-header.vue?raw";
import HtmlParagraph from "./components/html-paragraph.vue";
import HtmlParagraphCode from "./components/html-paragraph.vue?raw";
import HtmlHyperlink from "./components/html-hyperlink.vue";
import HtmlHyperlinkCode from "./components/html-hyperlink.vue?raw";
import HtmlImage from "./components/html-image.vue";
import HtmlImageCode from "./components/html-image.vue?raw";
import HtmlTable from "./components/html-table.vue";
import HtmlTableCode from "./components/html-table.vue?raw";
import HtmlList from "./components/html-list.vue";
import HtmlListCode from "./components/html-list.vue?raw";
import HtmlBlock from "./components/html-block.vue";
import HtmlBlockCode from "./components/html-block.vue?raw";
import HtmlInline from "./components/html-inline.vue";
import HtmlInlineCode from "./components/html-inline.vue?raw";
import CssSelector from "./components/css-selector.vue";
import CssSelectorCode from "./components/css-selector.vue?raw";
import CssFont from "./components/css-font.vue";
import CssFontCode from "./components/css-font.vue?raw";
import CssFontOther from "./components/css-font-other.vue";
import CssFontOtherCode from "./components/css-font-other.vue?raw";
import CssMargin from "./components/css-margin.vue";
import CssMarginCode from "./components/css-margin.vue?raw";
import CssBorder from "./components/css-border.vue";
import CssBorderCode from "./components/css-border.vue?raw";
import CssMouse from "./components/css-mouse.vue";
import CssMouseCode from "./components/css-mouse.vue?raw";
import TipBlock from "./components/elements/tip-block.vue";
import TipBlockCode from "./components/elements/tip-block.vue?raw";


// import html from 'highlight.js/lib/languages/html'
hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('html', html)


const theme= ref(darkTheme)
const flag = ref(false)
// function active(){const theme= ref(null)}
</script>

<template>
  <n-config-provider :theme="flag?null:darkTheme" :hljs="hljs">
    <n-space vertical size="large" >
<!--      <n-layout >-->
      <n-layout style="margin-top: -60px;">
        <n-layout-header>

          <n-card embedded>
            <n-space justify="end">

              <ThemeSwitch />   <!-- -- -->
<!--              <n-switch v-model:value="active" />-->
              <n-switch v-model:value="flag">
                <template #checked >
                  深色
                </template>
                <template #unchecked >
                  浅色
                </template>
              </n-switch>

<!--              <n-button @click="theme = darkTheme" color="#363636">-->
<!--                深色-->
<!--              </n-button>-->
<!--              <n-button @click="theme = null" color="#d3d3d3">-->
<!--                浅色-->
<!--              </n-button>-->

            </n-space>
          </n-card>

        </n-layout-header>

        <n-layout has-sider>
          <n-layout-sider content-style="padding: 240px;">

<!--            <n-card :bordered="false" embedded>-->
<!--            <div style="height: 300px">-->
              <n-anchor
                  affix
                  listen-to=".document-scroll-container"
                  :trigger-top="24"
                  :top="88"
                  style="z-index: 1; opacity: 0.3"
                  :bound="240"
              >
                <n-anchor-link title="演示" href="#演示">
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                </n-anchor-link>
                <n-anchor-link title="Props" href="#Props" />
              </n-anchor>
<!--            </div>-->
<!--            </n-card>-->

          </n-layout-sider>


          <n-layout-content content-style="padding: 24px;">

            <n-scrollbar style="max-height: 780px">
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
                <div class="green">
                  6
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
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
            </n-scrollbar>
          </n-layout-content>

        </n-layout>

        <n-layout-footer >
          <n-space justify="center">
            <n-card :bordered="false" embedded>
              <n-pagination v-model:page="page" :page-count="100" />
            </n-card>
          </n-space>
        </n-layout-footer>
      </n-layout>

    </n-space>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
