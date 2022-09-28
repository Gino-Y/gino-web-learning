<script setup>
import {ref, reactive, computed} from "vue";
import CompoentA from "../elements/compoent_A.vue";
import CompoentB from "../elements/compoent_B.vue";
import {NButton, NSpace} from "naive-ui";

const flag = ref(CompoentA)
</script>

<template>

  <component :is="flag"></component>

  <div class="flex">
    <n-button @click="flag=CompoentA" type="info" size="large">组件A</n-button>
    <n-button @click="flag=CompoentB" type="error" size="large">组件B</n-button>
  </div>

</template>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>