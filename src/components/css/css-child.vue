<template>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
</template>

<style scoped>
  li:nth-child(even){background-color: grey;}
  li:nth-child(odd){background-color: #313131;}
  li:nth-child(3){color: red;}
  li:first-child{background-color: #000000;}
  li:last-child{background-color: #0022ff;}
</style>