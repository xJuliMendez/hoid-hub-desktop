<script setup lang="ts">
import { ref } from 'vue';

const contador = ref(1);
const sumar = () => contador.value++;
</script>

<template>
  <div>
    Hello world!
    <v-btn @click="sumar">
      Button
    </v-btn>
    {{ contador }}
  </div>
</template>

