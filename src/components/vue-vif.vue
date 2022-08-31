<script setup>
let age = 20
</script>

<template>
  <div v-if="age>=30">v-if</div>
  <div v-else>v-else</div>
  <div v-if="age>=20">v-show</div>
</template>

<style scoped>

</style>