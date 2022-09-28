<script setup>
let msg = 'text'
let html = '<h1>html<h1>'
</script>

<template>
  <div v-text="msg"></div>
  <div>{{msg}}</div>
  <div v-html="html"></div>
</template>

<style scoped>

</style>