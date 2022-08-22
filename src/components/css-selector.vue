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
  <p>Lorem</p>
  <p class="paragraph">Lorem</p>
  <p id="paral">Lorem</p>
  <p class="paragraph" id="paral">Lorem</p>
</template>

<style scoped>
  p{color: red;}
  .paragraph{color: green;}
  #paral{color: blue;}
  #paral2{color: #c800ff;}
</style>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
      <n-layout>
        <n-layout-header>
          <n-space>
            <n-tag :bordered="false" type="error"> Selector 选择器与层级覆盖 </n-tag>
          </n-space>
        </n-layout-header>

        <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

          <p>Lorem</p>
          <p class="paragraph">Lorem</p>
          <p id="paral">Lorem</p>
          <p class="paragraph" id="paral2">Lorem</p>

        </n-layout-content>

        <n-layout-footer>
          <n-space justify="end">

            <n-button strong secondary type="info" @click="showModal = true">
              Code: css-selector.vue
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
      <n-alert title="样式选择器" type="error" :show-icon="false" style="user-select:none;">

        这个例子中<br>
        p 标签选择器<br>
        .paragraph 类选择器<br>
        #paral ID选择器<br>
        标签 ➔ 类 ➔ ID

      </n-alert>
      <div style="overflow: auto">
        <n-code :code="code" language="javascript" show-line-numbers />
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
p{
  color: red;
}
.paragraph{
  color: green;
}
#paral{
  color: blue;
}
#paral2{
  color: #c800ff;
}
</style>
