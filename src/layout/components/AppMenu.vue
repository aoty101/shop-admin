<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    mode="vertical"
    router
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><Menu /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/product/product_list">
          <el-icon><Menu /></el-icon>
          <template #title>
            商品列表
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_classify">
          <el-icon><Menu /></el-icon>
          <template #title>
            商品分类
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_attr">
          <el-icon><Menu /></el-icon>
          <template #title>
            商品规格
          </template>
        </el-menu-item>
        <el-menu-item index="/product/product_reply">
          <el-icon><Menu /></el-icon>
          <template #title>
            商品评论
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        <el-icon><Menu /></el-icon>
        <template #title>
          订单管理
        </template>
      </el-menu-item>
      <el-menu-item index="/order/offline">
        <el-icon><Menu /></el-icon>
        <template #title>
          收银订单
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>营销</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>设置</span>
      </template>
      <el-sub-menu index="/setting/permission">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/setting/permission/admin">
          <el-icon><Menu /></el-icon>
          <template #title>
            管理员
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/role">
          <el-icon><Menu /></el-icon>
          <template #title>
            角色
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/rule">
          <el-icon><Menu /></el-icon>
          <template #title>
            规则
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="5">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>维护</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location, Menu } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/index'
import { storeToRefs } from 'pinia'

const global = useGlobalStore()
const { isCollapse } = storeToRefs(global)

</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
