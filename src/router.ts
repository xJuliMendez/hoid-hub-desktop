import AppVue from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/login/index.vue'

const About = { template: '<div>About</div>' }

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: AppVue 
  },
  { 
    path: '/login', 
    name:'login', 
    component: index },
  { 
    path: '/about', 
    name:'about',
    component: About },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})