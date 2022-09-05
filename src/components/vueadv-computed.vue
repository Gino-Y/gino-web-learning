<script setup>
import {reactive, computed} from "vue";
import {NCard} from 'naive-ui'

const items = reactive([
  {title: '指压', check: false, price:298},
  {title: '柔式', check: false, price:498},
  {title: '水疗', check: false, price:698},
  {title: '胸推', check: false, price:898},
  {title: '口爆', check: false, price:998},
])

const cate = reactive([
  {title: '生蚝', check: false, price:200},
  {title: '鱼翅', check: false, price:100},
  {title: '海参', check: false, price:300},
  {title: '鲍鱼', check: false, price:400},
  {title: '龙虾', check: false, price:500},
])

const selected = computed(()=>arr=>{
  let slectedarr = arr.filter(v=>v.check) //被选中的数组
  let titleNum = slectedarr.length //被选中的数组的个数
  let priceAll = slectedarr.reduce((total,cur)=>total+cur.price,0); //计算出数组的和
  return [titleNum, priceAll]
})

</script>

<template>
  <n-card>
    <div >
      按了{{selected(items)[0]}}/{{items.length}}个项目 共{{selected(items)[1]}}
    </div>
    <div >
      吃了{{selected(cate)[0]}}/{{cate.length}}种美食 共{{selected(cate)[1]}}
    </div>
    <div >
      本会所共消费{{selected(items)[1]+selected(cate)[1]}}元
    </div>
  </n-card>

  <div class="items">
    <div class="items" v-for="(v, i) in items" key="i">
      <input type="checkbox" v-model="v.check">
      {{v.title}}{{v.price}}
    </div>
  </div>

  <div class="items">
    <div class="items" v-for="(v, i) in cate" key="i">
      <input type="checkbox" v-model="v.check">
      {{v.title}}{{v.price}}
    </div>
  </div>

</template>

<style scoped>
.items{
  /*background-color: red;*/
  color: #bebebe;
  width: 100px;
  float: left;
}
.title{
  color: #bdb57e;
  background-color: #394042;
}
.comm{
  background: rgba(68, 63, 63, 1);
  width: 200px;
  height: 260px;
}

</style>