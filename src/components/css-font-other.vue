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
  <span id="a">Lorem ipsum dolor sit amet</span><br>
  <span id="b">Lorem ipsum dolor sit amet</span><br>
  <span id="c">Lorem ipsum dolor sit amet</span><br>
  <span id="d">Lorem ipsum dolor sit amet</span><br>
  <span id="e">Lorem ipsum dolor sit amet</span><br>
  <span id="f">Lorem ipsum dolor sit amet</span><br>
  <span id="g">Lorem ipsum dolor sit amet</span><br>
  <span id="h">Lorem ipsum dolor sit amet<br>Lorem ipsum dolor sit amet</span><br>
</template>

<style scoped>
#a{ font-family: 'Times New Roman', serif }
#b{ font-weight: 800 }
#c{ font-style: italic }
#d{ text-decoration: underline }
#e{ text-transform: uppercase }
#f{ letter-spacing: 0.5em }
#g{ word-spacing: 2em }
#h{ line-height: 3em }
</style>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
      <n-layout>
        <n-layout-header>
          <n-space>
            <n-tag :bordered="false" type="error"> Font 字体 </n-tag>
          </n-space>
        </n-layout-header>

        <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

          <span id="a">Lorem ipsum dolor sit amet</span><br>
          <span id="b">Lorem ipsum dolor sit amet</span><br>
          <span id="c">Lorem ipsum dolor sit amet</span><br>
          <span id="d">Lorem ipsum dolor sit amet</span><br>
          <span id="e">Lorem ipsum dolor sit amet</span><br>
          <span id="f">Lorem ipsum dolor sit amet</span><br>
          <span id="g">Lorem ipsum dolor sit amet</span><br>
          <span id="h">Lorem ipsum dolor sit amet<br>Lorem ipsum dolor sit amet</span><br>

        </n-layout-content>

        <n-layout-footer>
          <n-space justify="end">

            <n-button strong secondary type="info" @click="showModal = true">
              Code: css-font.vue
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
      <n-alert title="字体其他设置" type="error" :show-icon="false" style="user-select:none;">

        font-family: 字体<br>
        font-weight: 字粗<br>
        font-style: 字体样式<br>
        text-decoration: 文本修饰线<br>
        text-transform: 大小写转换<br>
        letter-spacing: 字间距<br>
        word-spacing: 词间距<br>
        line-height: 行间距<br>

      </n-alert>
      <div style="overflow: auto">
        <n-code :code="code" language="javascript" show-line-numbers />
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
#a{ font-family: 'Times New Roman', serif }
#b{ font-weight: 800 }
#c{ font-style: italic }
#d{ text-decoration: underline }
#e{ text-transform: uppercase }
#f{ letter-spacing: 0.5em }
#g{ word-spacing: 2em }
#h{ line-height: 3em }
</style>
