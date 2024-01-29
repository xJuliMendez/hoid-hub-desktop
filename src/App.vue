<script setup lang="ts">
import '@unocss/reset/tailwind.css';
import SideNavBar from './components/navigation/SideNavBar.vue';

</script>

<template>
  <div flex>
    <SideNavBar static start-0 />

    <router-view />
  </div>
</template>

<style>
body {
  background-color: #001219;
}
</style>