<script setup>
import {NButton} from 'naive-ui'
import {ref} from 'vue'

let sub = ref('子组件数据')

const emits = defineEmits(['subClick'])

function emitClick() {
  emits('subClick', sub.value)
}
</script>

<template>

  <n-button @click="emitClick()" type="info" size="large">
    子组件按钮<br>
    子->父
  </n-button>

</template>

<style scoped>

</style>