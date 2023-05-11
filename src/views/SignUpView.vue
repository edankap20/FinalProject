<template>
  <main class="text-center">
    <div class="p-5 bg-image" id="bg-image"></div>

    <div class="card mx-4 mx-md-5 shadow" id="card">
      <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
          <div class="col-lg-7">
            <h2 class="fw-bold mb-5">Sign Up Now</h2>

            <form class="needs-validation" novalidate @submit.prevent="handleSignUp">

              <div class="form-outline mb-4">
                <label class="form-label" for="email">Email Address</label>
                <input type="email" id="email" class="form-control" v-model="email" required>
                <div class="invalid-feedback">Please provide a valid Email.</div>
              </div>


              <div class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
                <div class="invalid-feedback">Please provide a valid Password.</div>
              </div>


              <div class="form-outline mb-4">
                <label class="form-label" for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" class="form-control" v-model="confirmPassword" required>
                <div class="invalid-feedback">Please provide a valid Confirm Password.</div>
              </div>


              <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

              <div v-if="showInvalidPassword" class="alert alert-danger" role="alert">
                Your password do not match. Please Try again.
              </div>

              <div  v-if="showSignUpSuccess" class="alert alert-success" role="alert">
                <p class="emogi">🎊 🎉</p>
                <p>Sign Up successful! </p>
                <p class="fw-bolder">Check your Email and confirm your user to Sing Up.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
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
      showInvalidPassword: false,
      showSignUpSuccess: false,
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
          this.showInvalidPassword = true;
          return;
        } else {
          const userData = {
            email: this.email,
            password: this.password,
          };
          await this.registerUser(userData.email, userData.password);
          console.log(this.user)
          this.showInvalidPassword = false;
          this.showSignUpSuccess = true;
          setTimeout(() => {
            this.showSignUpSuccess = false;
            this.$router.push({ name: 'signIn' });
          }, 5000);
        }

      } catch (err) {
        console.error(err)
      }
    },
  },
  mounted() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })()
  }
};
</script>

<style scoped>
main {
  height: calc(100% - 185px);
}

#bg-image {
  background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
}

#card {
  margin-top: -170px;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(30px);
}
.emogi {
  font-size: x-large;
}
@media (min-width: 1024px) {
  #bg-image {
    background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
    height: 300px;
    background-position: center;
    background-size: cover;
    margin-top: 0px;
  }

  #card {
    margin-top: -170px;
    background: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(30px);
  }
}
</style>