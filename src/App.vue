<script setup lang="ts">
import { useRouter } from 'vue-router';
import '@unocss/reset/tailwind.css';
import SideNavBar from './components/navigation/SideNavBar.vue';

const router = useRouter();
</script>

<template>
  <div flex>
    <SideNavBar static start-0 />
    <div>
      <button text-red @click="router.push({ name: 'login' })">
        Login
      </button>
      <button text-red @click="router.push({ name: 'landing' })">
        Landing
      </button>
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  background-color: #001219;
}
</style>