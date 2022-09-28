<script setup>
import {NButton} from "naive-ui";

import {ref, reactive, computed} from "vue";

const count = ref(0)
const numbers = reactive({
  a:0,
  b:0
})

const total = computed(()=>{
  return  count.value + numbers.a + numbers.b
})

function increment(){
  count.value += 1;
}
function increase(num){
  numbers[num] += 1;
}
</script>

<template>
  <n-button @click="increment">{{count}}</n-button>
  <n-button @click="increase('a')">{{numbers.a}}</n-button>
  <n-button @click="increase('b')">{{numbers.b}}</n-button>
  <n-button style="background-color: black;color: white" >{{total}}</n-button>
</template>

<style scoped>

</style>