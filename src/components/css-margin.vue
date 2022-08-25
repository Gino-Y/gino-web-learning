<template>
  <div class="margin" id="z">margin</div>
  <div class="margin" id="a">margin</div>
  <div class="margin" id="b">margin</div>
  <div class="margin" id="c">margin</div>
  <div class="margin" id="d">margin</div>
</template>

<style scoped>
.margin{
  color: #a90000;
  background-color: #6abb6e;
}
#z{
  margin-top: 25px;
  margin-right: 20px;
  margin-bottom: 25px;
  margin-left: 100px;
}
#a{
  margin: 25px 20px 25px 100px;
}
#b{
  margin: 25px 20px;
}
#c{
  margin: 25px 20px 10px;
}
#d{
  margin: 50px;
}
</style>
