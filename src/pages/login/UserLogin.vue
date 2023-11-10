<script setup lang="ts">
import { ref } from 'vue';

const contador = ref(1);
</script>

<template>
  <v-card>
    Hola que tal {{ contador }}
  </v-card>
</template>

