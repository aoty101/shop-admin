import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useGlobalStore } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('../views/home/index.vue')
      },
      ...productRoutes,
      ...orderRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !useGlobalStore().user) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
