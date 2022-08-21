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
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 1</th>
    </tr>
    <tr>
      <td>row 1, sell 1</td>
      <td>row 1, sell 2</td>
    </tr>
    <tr>
      <td>row 2, sell 1</td>
      <td>row 2, sell 2</td>
    </tr>
  </table>
</template>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
        <n-layout>
          <n-layout-header>
            <n-space>
              <n-tag :bordered="false" type="error"> Table 表格标签 </n-tag>
            </n-space>
          </n-layout-header>

          <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <table border="1">
              <tr>
                <th>Header 1</th>
                <th>Header 1</th>
              </tr>
              <tr>
                <td>row 1, sell 1</td>
                <td>row 1, sell 2</td>
              </tr>
              <tr>
                <td>row 2, sell 1</td>
                <td>row 2, sell 2</td>
              </tr>
            </table>

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
        <n-alert title="表格标签" type="error" :show-icon="false" style="user-select:none;">

          table 表格<br>
          border 边框<br>
          tr 行元素<br>
          td 列元素<br>
          th 表头<br>


        </n-alert>
        <div style="overflow: auto">
          <n-code :code="code" language="javascript" show-line-numbers />
        </div>
    </n-card>
  </n-modal>
</template>
