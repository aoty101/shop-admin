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
import { a } from '@/api/user'
const counter = useCounterStore()
const { count } = storeToRefs(counter)
// const changeCounter = () => {
//   counter.counter++
// }
console.log(a)

</script>

<style lang='scss' scoped>

</style>
