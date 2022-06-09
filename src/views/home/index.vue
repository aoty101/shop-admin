<template>
  <div>
    home
    <h2>{{ count }}</h2>
    <button @click="counter.increment">
      增加
    </button>
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
div{
  color: $blue;
}
</style>
