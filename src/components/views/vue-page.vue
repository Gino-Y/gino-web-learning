<script setup>

import VueBasics01Page from "./vue-basics01-page.vue";
import VueBasics02Page from "./vue-basics02-page.vue";
import VueComponentPage from "./vue-component-page.vue";
import VueAxiosPage from "./vue-axios-page.vue";
import VueRouterPage from "./vue-router-page.vue";
</script>

<template>

  <div class="in">
    <router-link class="textc" to="/vue">VUE</router-link>
  </div>

  <div class="test3">

    <div class="in">
      <router-link class="textc" to="/vue/basics01">basics01</router-link>
    </div>

    <div class="in">
      <router-link class="textc" to="/vue/basics02">basics02</router-link>
    </div>

    <div class="in">
      <router-link class="textc" to="/vue/component">component</router-link>
    </div>

    <div class="in">
      <router-link class="textc" to="/vue/axios">axios</router-link>
    </div>

    <div class="in">
      <router-link class="textc" to="/vue/router">router</router-link>
    </div>

  </div>
  <router-view/>
</template>

<style scoped>
.textc{
  text-decoration: none;
  color: white;
  font-size: large;
}
.test3{
  display: flex;
  justify-content: space-around;
  /*max-height: 50px;*/
}
.in{
  width: 20%;
  margin: 2px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: black;
  /*box-sizing: border-box;*/
  /*border-radius: 20px;*/
}
</style>