<script setup>
import {ref} from 'vue'
import {
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NTag,
    NCard,
    NButton,
    NCode,
    NModal,
    NAlert
} from "naive-ui";

let showModal= ref(false)
const code = `
<template>
  <a href="https://www.baidu.com">百度</a><br>
  <a href="https://www.hao123.com">好123</a><br>

  新窗口打开<a href="https://www.baidu.com" target="_blank">百度</a><br>
  新窗口打开<a href="https://www.hao123.com" target="_blank">好123</a>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> Hyperlink 超链接标签 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <a href="https://www.baidu.com">百度</a><br>
            <a href="https://www.hao123.com">好123</a><br>

            新窗口打开<a href="https://www.baidu.com" target="_blank">百度</a><br>
            新窗口打开<a href="https://www.hao123.com" target="_blank">好123</a>

          </n-layout-content>

          <n-layout-footer>
            <n-space justify="end">

              <n-button strong secondary type="info" @click="showModal = true">
                Code: html-hyperlink.vue
              </n-button>

            </n-space>
          </n-layout-footer>
        </n-layout>
      </n-space>
  </n-card>


  <n-modal v-model:show="showModal">
    <n-card
        :bordered="false"
        size="small"
        role="dialog"
        aria-modal="true"
        style="
                opacity: 0.925;
                width: 350px;
                height: 500px;
                position: fixed;
                right: 50px;
                bottom: 100px;
              "
    >
        <n-alert title="段落标签" type="error" :show-icon="false" style="user-select:none;">

          a 超链接<br>
          href="" 设置地址<br>
          target="_blank" 新窗口打开

        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
