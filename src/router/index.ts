import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import('@/views/Home/index.vue')
const AdminView = () => import('@/views/Admin/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      hasAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
