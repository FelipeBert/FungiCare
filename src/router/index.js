import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/enciclopedia',
    name: 'enciclopedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enciclopedia.vue')
  }
  ,
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracao.vue')
  }
  ,
  {
    path: '/antigo',
    name: 'antigo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Antigos.vue')
  }
  ,
  {
    path: '/fungo_detectado',
    name: 'fungo_detectado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fungo_Detectado.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
