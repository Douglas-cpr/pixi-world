import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import('@/views/Home/index.vue')
const AdminView = () => import('@/views/Admin/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = document.title + ' | ' + to.name?.toString()
  next()
})

export default router
