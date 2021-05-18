import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/layout/home.vue'
import PostsDetail from '../pages/layout/postsDetail.vue'
import About from '../pages/layout/about.vue'
import Tags from '../pages/layout/tags.vue'
import Th from '../pages/layout/th.vue'
import Archive from '../pages/layout/archive.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => Home,
  },
  {
    path: '/Detail/:id',
    name: 'PostsDetail',
    component: () => PostsDetail,
  },
  {
    path: '/About',
    name: 'About',
    component: () => About,
  },
  {
    path: '/Tags',
    name: 'Tags',
    component: () => Tags,
  },
  {
    path: '/Th',
    name: 'Th',
    component: () => Th,
  },
  {
    path: '/Archive',
    name: 'Archive',
    component: () => Archive,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
