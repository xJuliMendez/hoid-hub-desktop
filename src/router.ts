import AppVue from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const About = { template: '<div>About</div>' }

const Landing = defineAsyncComponent(() => import('./pages/landing/index.vue'))
const Login = defineAsyncComponent(() => import('./pages/login/index.vue'))

const routes = [
  {
    path: '/home',
    name: 'home',
    component: AppVue
  },
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})