import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/layout/home.vue'
import PostsDetail from '../pages/layout/postsDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> Home,
  },
  {
    path: '/detail/:id',
    name: 'PostsDetail',
    component: ()=> PostsDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
