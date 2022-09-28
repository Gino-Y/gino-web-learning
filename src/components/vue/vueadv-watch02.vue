<script setup>
import {ref, reactive, computed, watch} from "vue"
import { NButton, NTag, NSpace, NCard } from 'naive-ui'

let num = ref(0)
let odevity = ref('偶数')
watch(num, (newValue, oldValue)=>{
  if(newValue < 8){
    if(newValue % 2 === 0){
      odevity.value = '偶数'
    }else {
      odevity.value = '奇数'
    }
  }else {
    odevity.value = '不再判断'
  }
})
function change() {
  num.value += 1
}
function zero() {
  num.value = 0
}
</script>

<template>
  <div>
    数字大于8将不再判断
  </div>
  <n-card>
    {{num}}
    <n-tag>
      {{odevity}}
    </n-tag>
  </n-card>
  <div class="flex">
    <n-button @click="change" type="info" size="large">
      Add
    </n-button>
    <n-button @click="zero" type="error" size="large">
      Zero
    </n-button>
  </div>

</template>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>