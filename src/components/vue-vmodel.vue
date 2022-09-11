<script setup>
import {ref} from 'vue'
let msg = ref('')
const items = ref([])
const characters = ref([])
const roles = [
  {name:'Gino', age:21},
  {name:'Luna', age:26},
  {name:'Tina', age:31},
  {name:'Dino', age:28},
]

let sex = ref(0)
let selected = ref('')
let age = ref()
</script>

<template>
  {{msg}}
    <input type="text" v-model.lazy="msg" :disabled="msg==='hello'"><br>
    <input type="checkbox" v-model="items" value="鲍鱼">鲍鱼<br>
    <input type="checkbox" v-model="items" value="龙虾">龙虾<br>
    <input type="checkbox" v-model="items" value="海参">海参<br>
    <input type="checkbox" v-model="items" value="帝王蟹">帝王蟹<br>
    <div>{{items}}</div>
  <span v-for="item in items">{{item}}、</span>

  <div v-for="role in roles">
    <input type="checkbox" v-model="characters" :value="role.name">{{role.age}} age is who ?<br>
  </div>
  them is
  <span v-for="character in characters" :key="character.id">{{character}}、</span><br>

  <input type="radio" v-model="sex" name="sdf" value="0">男
  <input type="radio" v-model="sex" name="sdf" value="1">女<br>
  {{sex}}

  <div>
    <select v-model="selected">
      <option value="0">苹果</option>
      <option value="1">香蕉</option>
      <option value="2">梨子</option>
    </select>
    {{selected}}
  </div>

  <div>
    <select v-model="age">
      <option v-for="role in roles" :value="role.age" :key="role.age">{{role.name}}</option>
    </select>
    {{age}}
  </div>
</template>

<style scoped>

</style>