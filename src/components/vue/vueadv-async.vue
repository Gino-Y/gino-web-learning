<script setup>
import {NScrollbar, NGrid, NGridItem} from 'naive-ui'
import {ref, onMounted} from "vue";
import CommodityAsync from "../elements/commodity-async.vue";

</script>

<template>

      <Suspense>
        <template #default>
          <commodity-async/>
        </template>
        <template #fallback>
          fallback
        </template>
      </Suspense>

</template>

<style scoped>

</style>