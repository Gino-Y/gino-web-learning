<template>
  <div id="f">
    <div id="c1">c1</div>
    <div id="c2">c2</div>
<!--    <div id="c3">c3</div>-->
  </div>
</template>

<style scoped>
#f{
  width: 200px;
  height: 200px;
  background-color: #37a69a;
  position: relative;
}
#c1{
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 10px
}
#c2{
  width: 50px;
  height: 50px;
  background-color: green;
  position: absolute;
  right: 5px;
}
#c3{
  width: 50px;
  height: 50px;
  background-color: blue;
  position: fixed;
  right: 5px;
  top: 5px;
}
</style>