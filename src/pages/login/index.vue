<script setup lang="ts">
import { ref } from 'vue';
import { Client, Stomp } from '@stomp/stompjs';
// import { postUser } from '../../api/user';

const username = ref('')
const email = ref('')
const password = ref('')


// const socket = new WebSocket('ws://api.hoid-hub-api.com:8080/ws');

// const connectSocket = () => {
//   console.log('sending');

//   socket.send(JSON.stringify({
//     username: username.value,
//     email: email.value,
//     password: password.value
//   }))
// }

// const closeSocket = () => {
//   console.log('closing');
//   socket.close()
// }

// socket.onopen = () => {
//   console.log('connected');
// }

// socket.onmessage = (event) => {
//   console.log('message', event.data);
// }

const client = Stomp.over(() => new WebSocket('ws://localhost:8080/ws'));

client.onChangeState = function (frame) {
  console.log(client.state);
  console.log('Connected: ' + frame);

  client.subscribe('/topic/greetings', function (message) {
    console.log('Received: ' + message.body);
  });
  console.log('Subscribed');

};

client.onWebSocketError = (error) => {
  console.error('Error with websocket', error);
};

client.onStompError = (frame) => {
  console.error('Broker reported error: ' + frame.headers['message']);
  console.error('Additional details: ' + frame.body);
};


const connectSocket = () => {
  client.activate()
}

const closeSocket = () => client.deactivate()

function createUser() {

  client.publish({
    destination: '/app/hello',
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    })
  })

  // postUser({
  //   username: username.value,
  //   email: email.value,
  //   password: password.value
  // })

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
    <button @click="connectSocket" border>connect</button>
    <button @click="closeSocket" border>close</button>
  </div>
</template>

