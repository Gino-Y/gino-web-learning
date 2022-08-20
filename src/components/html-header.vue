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
  <h1>这是一个标题1</h1>
  <hr>
  <h2>这是一个标题2</h2>
  <h3>这是一个标题3</h3>
  <h4>这是一个标题4</h4>
  <h5>这是一个<br>标题5</h5>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> Headline 标题标签 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">
            <h1>这是一个标题1</h1>
            <hr>
            <h2>这是一个标题2</h2>
            <h3>这是一个标题3</h3>
            <h4>这是一个标题4</h4>
            <h5>这是一个<br>标题5</h5>

          </n-layout-content>

          <n-layout-footer>
            <n-space justify="end">

              <n-button strong secondary type="info" @click="showModal = true">
                Code: html-header.vue
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
        <n-alert title="标题标签" type="error" :show-icon="false" style="user-select:none;">

          h1 最大<br>
          h5 最小<br>
          hr 分割线<br>
          br 换行

        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
