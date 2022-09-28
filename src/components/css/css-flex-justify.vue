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
  <div class="test3">
    <div class="in">A</div>
    <div class="in">B</div>
    <div class="in">C</div>
  </div>
  <div class="test4">
    <div class="in">A</div>
    <div class="in">B</div>
    <div class="in">C</div>
  </div>
  <div class="test5">
    <div class="in">A</div>
    <div class="in">B</div>
    <div class="in">C</div>
  </div>
</template>

<style scoped>
div{background-color: #3b0749;}
.test1{
  display: flex;
  justify-content: flex-end;
}
.test2{
  display: flex;
  justify-content: space-between;
}
.test3{
  display: flex;
  justify-content: space-around;
}
.test4{
  display: flex;
  justify-content: space-evenly;
}
.test5{
  display: flex;
  justify-content: center;
}
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