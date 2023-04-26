<template>
    <h1>Sign In View (Hijo de Auth)</h1>
    <div>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">
      
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      
      <button type="submit" @click.prevent="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'SignInView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methots: {
        signIn() {
            // Implementar mi lógica de SignIn aquí
        }
    }
}
</script>

<style>
</style>