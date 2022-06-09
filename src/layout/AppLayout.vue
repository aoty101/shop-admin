<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <app-menu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './components/AppMenu.vue'

</script>

<style lang='scss' scoped>
.el-header{
  background-color: #b3c0d1;
  color:#333
}
.el-aside{
  background-color: #304156;
  color:#333
}

.el-main{
  background-color: #e9eef3;
  color:#333
}
.el-container{
  height: 100vh;
}
</style>
