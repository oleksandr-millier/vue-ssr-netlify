import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
