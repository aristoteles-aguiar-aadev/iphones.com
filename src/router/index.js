import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/macbook',
    name: 'MacBook',
    component: () => import('@/views/MacBook.vue')
  },
  {
    path: '/iphone',
    name: 'iPhone',
    component: () => import('@/views/IPhone.vue')
  },
  {
    path: '/ipad',
    name: 'iPad',
    component: () => import('@/views/IPad.vue')
  },
  {
    path: '/airpods',
    name: 'AirPods',
    component: () => import('@/views/AirPods.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
