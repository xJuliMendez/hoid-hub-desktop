import AppVue from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from './pages/login/UserLogin.vue'

const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: AppVue },
  { path: '/login', component: UserLogin },
  { path: '/about', component: About },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})