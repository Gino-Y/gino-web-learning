<script setup>
import {
  NConfigProvider,
  NCard,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NAnchor,
  NAnchorLink,
  NPagination,
  NGrid,
  NGridItem,
  NScrollbar,
  NSwitch
} from 'naive-ui'

</script>

<template>
  <n-card :bordered="false" embedded>
    <n-anchor
        affix
        listen-to=".document-scroll-container"
        :trigger-top="24"
        :top="88"
        style="z-index: 1; opacity: 0.3;"
        :bound="240"
    >
<!--      <n-anchor-link title="演示" href="#演示">-->
      <n-anchor-link class="router">
        <router-link class="textc" to="/html">HTML</router-link>
        <router-link class="textc" to="/css">CSS</router-link>
        <router-link class="textc" to="/flex">Flex</router-link>
        <router-link class="textc" to="/vue">VUE</router-link>
        <router-link class="textc" to="/vue/basics01">basics01</router-link>
        <router-link class="textc" to="/vue/basics02">basics02</router-link>
        <router-link class="textc" to="/vue/component">component</router-link>
        <router-link class="textc" to="/vue/axios">axios</router-link>
        <router-link class="textc" to="/vue/router">router</router-link>
<!--        <n-anchor-link title="基础用法" href="#basic" />-->
<!--        <n-anchor-link title="忽略间隔" href="#ignore-gap" />-->
<!--        <n-anchor-link title="固定" href="#affix" />-->
<!--        <n-anchor-link title="滚动到" href="#scrollto" />-->
      </n-anchor-link>
    </n-anchor>
  </n-card>

</template>

<style scoped>
.router{
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.textc{
  text-decoration: none;
  color: white;
  font-size: large;
}
</style>