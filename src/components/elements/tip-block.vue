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
  NAlert,NGrid,NGridItem
} from "naive-ui";

let showModal= ref(false)
const {tip_name, file_name, code} = defineProps({
  tip_name:{
    type:String,
    default:()=>'typ name'
  },
  file_name:{
    type:String,
    default:()=>'file-name'
  },
  code:{
    type:String,
    default:()=>'show code'
  },
})
</script>

<template>
  <n-card size="small" :bordered="false">

    <n-space vertical size="large" >
      <n-layout>
        <n-layout-header>
            <n-tag :bordered="false" type="error" style="width: 100%"> {{tip_name}} </n-tag>
        </n-layout-header>

        <n-layout-content content-style="padding: 20px;" style="background-color: rgba(96,99,131,0.15);color: #37a69a">
<!--          <n-card content-style="padding: 0px;"  style="background-color: rgba(96,99,131,0.15);color: #37a69a; margin: 20px" :bordered="false">-->
            <slot/>
<!--          </n-card>-->
        </n-layout-content>

        <n-layout-footer>
          <n-space justify="end">

            <n-button strong secondary type="info" @click="showModal = true">
              Code: {{file_name}}.vue
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
                width: 80%;
                height: 80%;
                /*position: fixed;*/
                /*right: 50px;*/
                /*bottom: 10px;*/
              "
    >
<!--      <n-tag :bordered="false" type="error" style="width: 100%"> {{tip_name}} </n-tag>-->
      <div>{{tip_name}}</div>
      <n-grid :x-gap="4" :y-gap="8" cols="400:1 600:2 ">
        <n-grid-item>
          <n-alert  :show-icon="false" :bordered="false">
            <slot/>
          </n-alert>
        </n-grid-item>
        <n-grid-item>
      <n-alert title="Node" type="error" :show-icon="false" style="user-select:none;">

        <slot name="description"/>

      </n-alert>
      </n-grid-item>
    </n-grid>
      <div style="overflow: auto">
<!--        <span>Show Code:</span>-->
        <n-code :code="code" language="javascript,html" show-line-numbers />
      </div>
    </n-card>

  </n-modal>
</template>
