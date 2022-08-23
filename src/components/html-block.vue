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
  <h1>h1</h1>
  <p>p</p>
  <table>table</table>
  <ol>ol</ol>
  <ul>ul</ul>
  <li>li</li>
  <div>div</div>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> Block 区块元素 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <h1>h1</h1>
            <p>p</p>
            <table>table</table>
            <td>td</td>
            <ol>ol</ol>
            <ul>ul</ul>
            <li>li</li>
            <div>div</div>

          </n-layout-content>

          <n-layout-footer>
            <n-space justify="end">

              <n-button strong secondary type="info" @click="showModal = true">
                Code: html-block.vue
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
        <n-alert title="区块元素" type="error" :show-icon="false" style="user-select:none;">

          通常会以新行开始<br>
          div 区块容器


        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
