import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }

const Landing = (() => import('./pages/landing/index.vue'))
const Login = (() => import('./pages/login/index.vue'))

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Landing
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