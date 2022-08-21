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
  <p>这是段落A</p>
  <p>这是段落B</p>
  <hr>
  <p>段落之间行间距比较大</p>
  <p>如果要再段落内换行<br>使用br标签，行间距即正常</p>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> Paragraph 段落标签 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <p>这是段落A</p>
            <p>这是段落B</p>
            <hr>
            <p>段落之间行间距比较大</p>
            <p>如果要再段落内换行<br>使用br标签，行间距即正常</p>


          </n-layout-content>

          <n-layout-footer>
            <n-space justify="end">

              <n-button strong secondary type="info" @click="showModal = true">
                Code: html-paragraph.vue
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

          段落标签会自动换行<br>
          且行间距比较大<br>
          p 段落<br>
          hr 分割线<br>
          br 段落内换行

        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
