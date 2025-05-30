<template>
    <div class="form-container">
        <h2>Signup</h2>
        <form @submit.prevent="submit">
            <input v-model="form.username" placeholder='username'>
            <p v-if="!form.username">Username is required</p>
            <input v-model="form.email" placeholder="Email"/>
            <p v-if="!form.email.includes('@')">Enter a valid email</p>
            <input v-model="form.password" placeholder="Password" type="password"/>
            <p v-if="form.password.length<6">Password is too short</p>
            <button :disabled="isValid">Register</button>
        </form>
        <p v-if="submitted">✅ Account created for {{ form.username }}</p>

    </div>
</template>
<script setup> 
import{reactive ,ref,computed} from 'vue'
const form=reactive({
    username:'',
    email:'',
    password:''
})
const submitted=ref(false)
const isValid=computed(()=>
form.username && form.email.includes('@') && form.password.length>=6);
function submit(){
    submitted.value=true;
    console.log('signed up:',form);
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
  background: #42b983;
  color: white;
  border: none;
}
p {
  color: red;
  font-size: 0.8rem;
}
</style>