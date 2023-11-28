<script setup lang="ts">
import { ref } from 'vue';

const contador = ref(1);
</script>

<template>
  <div>
    Hola que tal {{ contador }}
  </div>
</template>

