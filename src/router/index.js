import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    text: "Anasayfa",
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    text: "Hakkında",
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    text: "Detaylar",
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
