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
import MenuPage from "./components/views/menu-page.vue";


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

            <menu-page/>
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
/**{*/
/*  white-space: nowrap;*/
/*}*/
</style>
