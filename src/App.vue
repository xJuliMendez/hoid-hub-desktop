<script setup lang="ts">
import { ref } from 'vue';

const foo = ref(1);
const sumar = () => foo.value++;
</script>

<template>
  <div>
    Hello world!
    <v-btn @click="sumar">
      Button
    </v-btn>
    {{ foo }}
  </div>
</template>

