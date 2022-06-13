<template>
  <el-space size="large">
    <ToggleSidebar class="test" />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <!-- <Notification /> -->
    <!-- <UserInfo /> -->
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from './toggle-sidebar.vue'
import Breadcrumb from './header-breadcrumb.vue'
import FullScreen from './header-fullScreen.vue'
import MenuSearch from './menu-search.vue'
// import Notification from './header-notify.vue'
// import UserInfo from './user-info.vue'

</script>

<style lang="scss" scoped>
.el-icon {
  font-size: 24px;
  cursor: pointer;
}
</style>
