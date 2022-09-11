<script setup>
const {num, color, action} = defineProps({
  num:{
    type:Number,
    default:()=>0
  },
  color:{
    type:String,
    default:()=>'black'
  },
  action:Function
})
</script>
<template >
  <div class="num" :style="{color:color}" @click="action">{{num}}</div>
</template>


<style scoped>
.num{
  text-align:center;
  font-size:50px;
  margin: auto;
  width: 100px;
  background-color: #6fbee7;
  user-select:none;
}
</style>