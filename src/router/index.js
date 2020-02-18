import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/carrito",
    name : "carrito",
    component: () => import('../views/Carrito.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
