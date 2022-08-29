<template>
  <div class="test1">
    <div class="in">A</div>
    <div class="in">B</div>
    <div class="in">C</div>
  </div>
  <div class="test2">
    <div class="in">A</div>
    <div class="in">B</div>
    <div class="in">C</div>
  </div>
</template>

<style scoped>
div{
  width: 90%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  background-color: #3b0749;
}
.test1{align-items: center}
.test2{align-items: stretch}
.in{
  width: 50px;
  height: 50px;
  //padding: 20px;
  //margin: 10px;
  background-color: black;
  border-style:solid;
  border-color: #00ffe2;
  box-sizing: border-box;
}
</style>