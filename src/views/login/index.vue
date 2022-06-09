<template>
  <div>
    login
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { getLoginInfo } from '@/api/common'
// setup 默认导入的是值，添加type告诉为类型
import type { ILoginInfo } from '@/api/types/common'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    list.value = data.slide
  })
})
</script>

<style lang='scss' scoped>

</style>
