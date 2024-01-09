<script setup lang="ts">
import { useRouter } from 'vue-router';
import '@unocss/reset/tailwind.css';

const router = useRouter();
</script>

<template>
  <div class="app-container">
    <button text-red @click="router.push({ name: 'login' })">
      Login
    </button>
    <button text-red @click="router.push({ name: 'landing' })">
      Landing
    </button>
    <router-view />
  </div>
</template>

<style>
body {
  background-color: #001219;
}
</style>