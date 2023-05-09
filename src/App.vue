<template>
  <div id="aplicacion">
    <nav id="laptop-view" class="navbar sticky-top navbar-expand-xxl  navbar-light bg-light">
      <router-link class="nav-link" @click="closeMenu" style="font-size: 2em" to="/">Home</router-link>
      <div class="ml-auto d-xxl-flex align-items-center" id="lista">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="!user" class="collapse navbar-collapse ml-4" :class="{ show: menuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />
    <FooterStick />
  </div>
</template>

<script>
import userStore from '@/stores/user.js';
import { mapState } from 'pinia';
import FooterStick from '@/components/FooterStick.vue';
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  components: {
    FooterStick,
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
  }
}
</script>

<style>
#aplicacion {
  height: 100vh;
}

.nav-link {
  margin-right: 2em;
}

.logo {
  width: 40px;
  height: 40px;
}

.container-fluid {
  background: linear-gradient(to right, rgb(6, 6, 95), rgb(30, 30, 144), #04044f, #111167);
  margin-top: 2rem;
}
h6 {
  color: rgba(255, 255, 255, 0.602);
}
h7 {
  color: rgba(255, 255, 255, 0.581);
}
@media (max-width: 425px) {
  .navbar-nav {
    flex-direction: column;
  }
  .nav-item {
    margin-bottom: .5rem;
  }
  .collapse {
    display: none;
  }
  .collapse.show {
    display: block;
  }
  #lista {
    display: none;
  }
  .logo {
    width: 20px;
    height: 20px;
  }
  .container-fluid {
    background: linear-gradient(to right, rgb(6, 6, 95), rgb(30, 30, 144), #04044f, #111167);
    margin-top: 2rem;
  }
  h6 {
    font-style: italic;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.602);
  }
  h7 {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.581);
  }
}
@media (min-width: 426px) {
  .navbar-nav {
    margin-left: auto;
    flex-direction: row;
  }
  .nav-link {
    margin-right: 2em;
  }
  .navbar-toggler {
    display: none;
  }
  .logo {
    width: 30px;
    height: 30px;
  }
  .container-fluid {
    /*   background-color: rgb(14, 14, 51); */
    background: linear-gradient(to right, rgb(6, 6, 95), rgb(30, 30, 144), #04044f, #111167);
    margin-top: 2rem;
  }
  h6 {
    font-style: italic;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.602);
  }
  h7 {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.581);
  }
}
@media (min-width: 1024px) {
  .nav-link {
    margin-left: 2em;
  }
  .navbar-nav {
    margin-right: 3rem;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .container-fluid {
    /*   background-color: rgb(14, 14, 51); */
    background: linear-gradient(to right, rgb(6, 6, 95), rgb(30, 30, 144), #04044f, #111167);
    margin-top: 2rem;
  }
  h6 {
    font-style: italic;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.602);
  }
  h7 {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.581);
  }
}
</style>