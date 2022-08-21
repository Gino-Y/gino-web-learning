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
  <ol>
    <li>有序列表 1</li>
    <li>有序列表 2</li>
    <li>有序列表 3</li>
  </ol>

  <ul>
    <li>无序列表 1</li>
    <li>无序列表 2</li>
    <li>无序列表 3</li>
  </ul>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> List 列表标签 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <ol>
              <li>有序列表 1</li>
              <li>有序列表 2</li>
              <li>有序列表 3</li>
            </ol>

            <ul>
              <li>无序列表</li>
              <li>无序列表</li>
              <li>无序列表</li>
            </ul>
              <li>默认无序列表</li>

          </n-layout-content>

          <n-layout-footer>
            <n-space justify="end">

              <n-button strong secondary type="info" @click="showModal = true">
                Code: html-table.vue
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
        <n-alert title="列表标签" type="error" :show-icon="false" style="user-select:none;">

          ol 有序列表<br>
          ul 无序列表<br>
          li 列表元素<br>


        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
