<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup lang='ts'>
import { useCounterStore } from '../../store/conter'
import { storeToRefs } from 'pinia'
const counter = useCounterStore()
const { count } = storeToRefs(counter)
// const changeCounter = () => {
//   counter.counter++
// }

</script>

<style lang='scss' scoped>

</style>
