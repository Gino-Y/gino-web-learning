<template>
  <a href="https://www.baidu.com">百度</a><br>
  <a href="https://www.hao123.com">好123</a><br>

  新窗口打开<a href="https://www.baidu.com" target="_blank">百度</a><br>
  新窗口打开<a href="https://www.hao123.com" target="_blank">好123</a><br>

  <a id="changestyle" href="https://www.baidu.com" target="_blank">百度</a><br>
</template>

<style scoped>
#changestyle{
  background-color: #2c3e50;
  color: #37a69a;
  padding: 10px;
  text-decoration: none;
}
#changestyle:hover{
  background-color: #235485;
  color: #24d0bd;
}
#changestyle:active{
  background-color: #19ad8a;
  color: #00ffe2;
}
#changestyle:visited{
  background-color: #3b0749;
  color: red;
  opacity: 0.9;
}
</style>
