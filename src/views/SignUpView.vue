<template>
<!-- Section: Design Block -->
<section class="text-center">
  <!-- Background image -->
  <div class="p-5 bg-image" id="bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        background-position: center;
        background-size: cover;
        "></div>
  <!-- Background image -->

  <div class="card mx-4 mx-md-5 shadow" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-7">
          <h2 class="fw-bold mb-5">Sign Up Now</h2>
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control" v-model="email">
              <label class="form-label" for="email">Email Address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control" v-model="password">
              <label class="form-label" for="password">Password</label>
            </div>

            <!-- Confirm Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="confirm-password" class="form-control" v-model="confirmPassword">
              <label class="form-label" for="confirm-password">Confirm Password</label>
            </div>

            <!-- Submit button -->
            <button type="button" class="btn btn-primary btn-block mb-4" @click="handleSignUp">
              Sign up
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->
  


</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/user.js';

export default {
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['registerUser']),
    async handleSignUp() {
      try {
        if (this.password !== this.confirmPassword) {
          throw new Error('Las contraseñas no coinciden');
        }
        const userData = {
          email: this.email,
          password: this.password,
        };
        await this.registerUser(userData.email, userData.password);
        console.log(this.user)
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.error(err)
      }
    }
  }
};
</script>

<style scoped>
@media (min-width: 1024px) {
    #bg-image {
        margin-top: -400px;
    }
}
</style>