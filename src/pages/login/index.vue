<script setup lang="ts">
import { ref } from 'vue';
import { postUser } from '../../api/user';


const username = ref('')
const email = ref('')
const password = ref('')

function createUser() {
  postUser({
    username: username.value,
    email: email.value,
    password: password.value
  })
}

</script>

<template>
  <div flex flex-col justify-between items-center bg-white w-100 p-4 rounded>
    <span>Crear usuario</span>
    <label class="relative block">
      <input v-model="username" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 ç shadow-sm
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder="Username"
        type="text" />
    </label>
    <label class="relative block">
      <input v-model="email" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 ç shadow-sm
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder="Email"
        type="text" />
    </label>
    <label class="relative block">
      <input v-model="password" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 ç shadow-sm
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder="Password"
        type="password" />
    </label>
    <button @click="createUser" border>login</button>
  </div>
</template>

