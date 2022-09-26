<script setup>
import {onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
const route = useRoute()


const routeData = ref(0)

onMounted(()=>{
  console.log(route.params.id)
  routeData.value = route.params.id
})
</script>

<template>
列表管理---路由参数: {{routeData}}
</template>

<style scoped>

</style>