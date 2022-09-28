<script setup>
const items = ['A', 'B', 'C']
const obj = {id:1, name:'Gino'}
const objarr = [
  {age:18, name:'Gino'},
  {age:22, name:'Tina'},
  {age:33, name:'Luy'}
]
</script>

<template>
  <div class="flex">
    <div class="c" v-for="item in items">v-for {{item}}</div>
  </div>

  <p v-for="(item, index) in items" :key='index'>数组 item:{{item}} index:{{index}}</p>

  <div class="flex">
    <div class="c" v-for="(value, key) in obj" :key='key'>{{key}}: {{value}}</div>
  </div>

  <p v-for="(item, index) in objarr" :key='index'>数组对象 {{index}} {{item.name}} {{item.age}}</p>
</template>

<style scoped>
.flex{
  display: flex;
  justify-content: space-around;
}
.c{
  background-color: #001e00;
  padding: 3px;
}
p{
  background-color: #3d0000;
}
</style>