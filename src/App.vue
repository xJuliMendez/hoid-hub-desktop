<script setup lang="ts">
import { useRouter } from 'vue-router';
import '@unocss/reset/tailwind.css';

const router = useRouter();
</script>

<template>
  <div>
    <button text-red @click="router.push({name: 'login'})">
      Login
    </button>
    <router-view />
  </div>
</template>

