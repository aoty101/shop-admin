<template>
  <el-icon @click="isCollapse = !isCollapse">
    <Expand v-if="isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/index'
import { Fold, Expand } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

const global = useGlobalStore()
const { isCollapse } = storeToRefs(global)

</script>

<style lang="scss" scoped></style>
