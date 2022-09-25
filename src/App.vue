<script setup>
import { darkTheme,  } from "naive-ui";
import {
    NConfigProvider,
    NCard,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NAnchor,
    NAnchorLink,
    NPagination,
    NGrid,
    NGridItem,
    NScrollbar,
    NSwitch
} from 'naive-ui'

import { ref } from "vue";
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import ThemeSwitch from "./components/theme_switch.vue";


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
              <n-switch v-model:value="flag">
                <template #checked >
                  深色
                </template>
                <template #unchecked >
                  浅色
                </template>
              </n-switch>

            </n-space>
          </n-card>

        </n-layout-header>

        <n-layout has-sider>
          <n-layout-sider content-style="padding: 240px;">

            <n-card :bordered="false" embedded>
              <n-anchor
                  affix
                  listen-to=".document-scroll-container"
                  :trigger-top="24"
                  :top="88"
                  style="z-index: 1; opacity: 0.3"
                  :bound="240"
              >
                <n-anchor-link title="演示" href="#演示">
                  <router-link class="textc" to="/html">HTML</router-link>
                  <router-link class="textc" to="/css">CSS</router-link>
                  <router-link class="textc" to="/flex">Flex</router-link>
<!--                  <router-link class="textc" to="/vue">VUE</router-link>-->
                  <router-link class="textc" to="/vue/basics01">basics01</router-link>
                  <router-link class="textc" to="/vue/basics02">basics02</router-link>
                  <router-link class="textc" to="/vue/router">router</router-link>
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
            </n-card>

          </n-layout-sider>


          <n-layout-content content-style="padding: 24px;">
            <router-view/>
            <n-scrollbar style="max-height: 780px">
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
.textc{
  text-decoration: none;
  color: white;
}
</style>
