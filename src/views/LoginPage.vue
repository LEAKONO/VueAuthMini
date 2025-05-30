<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button :disabled="!email || password.length < 6">Login</button>
    </form>
    <p v-if="loggedIn">✅ Logged in as {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const loggedIn = ref(false);

function login() {
  loggedIn.value = true;
  console.log('Logged in:', email.value);
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
}
input {
  display: block;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
}
button {
  padding: 0.75rem;
  width: 100%;
  background: #34495e;
  color: white;
  border: none;
}
</style>
