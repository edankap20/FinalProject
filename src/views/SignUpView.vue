<template>
    <h1>Sign Up View (Hijo de Auth)</h1>
    <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <button @click="handleSignUp" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions} from 'pinia';
import userStore from '@/stores/user.js';

export default {
    name: 'SignUpView',
    data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['registerUser']),
    handleSignUp() {
        const userData = {
            email: email.value,
            password: password.value,
        };
        this.registerUser(userData.email, userData.password)
    }
    }
  }
</script>

<style>
</style>