<script setup>
import {NCard, NButton} from 'naive-ui'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const _d = ref(1)
onMounted(()=>{
  console.log(route.query.name)
  _d.value = route.query.name
})

</script>

<template>
    home--{{_d}}
<!--    <n-button @click="goBack">回到首页</n-button>-->
</template>

<style scoped>

</style>