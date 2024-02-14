<script setup lang="ts">
import { ref } from 'vue';
import { Stomp } from '@stomp/stompjs';
// import { postUser } from '../../api/user';


const socket = new WebSocket('ws://api.hoid-hub-api.com/chat-socket');

const client = Stomp.over(socket);
client.connect({}, function () {
  console.log('Connected: ' + client.connected);
  client.subscribe('/topic/1', function (message) {
    const messageContent = JSON.parse(message.body);
    console.log('message', messageContent);
  });
});

interface ChatMessage {
  username: string;
  message: string;
}


const username = ref('')
const email = ref('')
const password = ref('')

function createUser() {
  client.send('/app/chat/1', {}, JSON.stringify({ username: 'cliente', message: 'send' }));

  // postUser({
  //   username: username.value,
  //   email: email.value,
  //   password: password.value
  // })

  // socket.send(JSON.stringify({
  //   username: username.value,
  //   email: email.value,
  //   password: password.value
  // }))
  username.value = ''
  email.value = ''
  password.value = ''
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

