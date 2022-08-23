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
import HtmlParagraph from "./components/html-paragraph.vue";
import HtmlHyperlink from "./components/html-hyperlink.vue";
import HtmlImage from "./components/html-image.vue";
import HtmlTable from "./components/html-table.vue";
import HtmlList from "./components/html-list.vue";
import HtmlBlock from "./components/html-block.vue";
import HtmlInline from "./components/html-inline.vue";
import CssSelector from "./components/css-selector.vue";
import CssFont from "./components/css-font.vue";
import CssFontOther from "./components/css-font-other.vue";
import CssMargin from "./components/css-margin.vue";
import CssBorder from "./components/css-border.vue";
import CssMouse from "./components/css-mouse.vue";
import TipBlock from "./components/elements/tip-block.vue";


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

<!--                <tip-block :tip_name="'Headline 标题标签'"-->
<!--                           :file_name="'html-header'"-->
<!--                           :code=readFile("./components/html-header.vue")-->
<!--                >-->
                <tip-block :tip_name="'Headline 标题标签'"
                           :file_name="'html-header'"
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
                           :file_name="'html-header'"
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
                >
                  <html-hyperlink/>
                  <template #description>
                    a 超链接<br>
                    href="" 设置地址<br>
                    target="_blank" 新窗口打开
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item> <html-paragraph/> </n-grid-item>
              <n-grid-item> <html-hyperlink/> </n-grid-item>
              <n-grid-item> <html-image/> </n-grid-item>
              <n-grid-item> <html-table/> </n-grid-item>
              <n-grid-item> <html-list/> </n-grid-item>
              <n-grid-item> <html-block/> </n-grid-item>
              <n-grid-item> <html-inline/> </n-grid-item>
              <n-grid-item> <css-selector/> </n-grid-item>
              <n-grid-item> <css-font/> </n-grid-item>
              <n-grid-item> <css-font-other/> </n-grid-item>
              <n-grid-item> <css-margin/> </n-grid-item>
              <n-grid-item> <css-border/> </n-grid-item>
              <n-grid-item> <css-mouse/> </n-grid-item>
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
