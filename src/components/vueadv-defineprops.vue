<script setup>
import {ref, reactive, computed} from "vue";
import Num from "./elements/num.vue";
let num = ref(1)
function add(){
  num.value += 1
}

</script>

<template>

  <num :num=num :action="add" :color="'red'"/>

</template>

<style scoped>

</style>