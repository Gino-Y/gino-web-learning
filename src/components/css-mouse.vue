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
  <div class="mouse">鼠标行为</div>
</template>

<style scoped>
.mouse{
  color: #a90000;
  background-color: #6abb6e;
  padding: 20px;
  margin: 20px;
  user-select:none;
}
.mouse:hover{
  background-color: #38e341;
}
.mouse:active{
  background-color: #fbe703;
}
</style>
`
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
      <n-layout>
        <n-layout-header>
          <n-space>
            <n-tag :bordered="false" type="error"> Mouse 鼠标行为</n-tag>
          </n-space>
        </n-layout-header>

        <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <div class="mouse">鼠标行为</div>

        </n-layout-content>

        <n-layout-footer>
          <n-space justify="end">

            <n-button strong secondary type="info" @click="showModal = true">
              Code: css-border.vue
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
      <n-alert title="鼠标行为" type="error" :show-icon="false" style="user-select:none;">

        hover 经过<br>
        active 点击<br>
        user-select:none; 屏蔽选择

      </n-alert>
      <div style="overflow: auto">
        <n-code :code="code" language="javascript" show-line-numbers />
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.mouse{
  color: #a90000;
  background-color: #6abb6e;
  padding: 20px;
  margin: 20px;
  user-select:none;
}
.mouse:hover{
  background-color: #38e341;
}
.mouse:active{
  background-color: #fbe703;
}
</style>
