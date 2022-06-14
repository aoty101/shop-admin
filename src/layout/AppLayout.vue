<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <app-menu />
      </el-aside>
      <el-container>
        <el-header>
          <app-header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './components/AppMenu.vue'
import AppHeader from './components/AppHeader/index.vue'

</script>

<style lang='scss' scoped>
.el-header{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color:#333
}
.el-aside{
  width: auto;
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
