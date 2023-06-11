<template>
  <h1>router home hello </h1>
</template>

<script setup lang="ts">

import {mainStore} from "@/store";
import {storeToRefs} from "pinia"

const store = mainStore()
const {count, getCount} = storeToRefs(store)


const handelClick = () => {
  store.setCount(123)
}
</script>

<style scoped lang="scss">

</style>
