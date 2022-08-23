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
  <div class="margin" id="z">margin</div>
  <div class="margin" id="a">margin</div>
  <div class="margin" id="b">margin</div>
  <div class="margin" id="c">margin</div>
</template>

<style scoped>
#z{
  margin-top: 25px;
  margin-right: 20px;
  margin-bottom: 25px;
  margin-left: 100px;
}
#a{
  margin: 25px 20px 25px 100px;
}
#b{
  margin: 25px 20px;
}
#c{
  margin: 25px 20px 10px;
}
.margin{
  color: #a90000;
  background-color: #6abb6e;
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
            <n-tag :bordered="false" type="error"> Margin 外边距</n-tag>
          </n-space>
        </n-layout-header>

        <n-layout-content content-style="padding: 0px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">

            <div class="margin" id="z">margin</div>
            <div class="margin" id="a">margin</div>
            <div class="margin" id="b">margin</div>
            <div class="margin" id="c">margin</div>
            <div class="margin" id="d">margin</div>

        </n-layout-content>

        <n-layout-footer>
          <n-space justify="end">

            <n-button strong secondary type="info" @click="showModal = true">
              Code: css-margin.vue
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
      <n-alert title="外边距" type="error" :show-icon="false" style="user-select:none;">

        可简写<br>
        padding 用法相同

      </n-alert>
      <div style="overflow: auto">
        <n-code :code="code" language="javascript" show-line-numbers />
      </div>
    </n-card>
  </n-modal>
</template>

<style scoped>
.margin{
  color: #a90000;
  background-color: #6abb6e;
}
#z{
  margin-top: 25px;
  margin-right: 20px;
  margin-bottom: 25px;
  margin-left: 100px;
}
#a{
  margin: 25px 20px 25px 100px;
}
#b{
  margin: 25px 20px;
}
#c{
  margin: 25px 20px 10px;
}
#d{
  margin: 50px;
}
</style>
