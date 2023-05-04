<!-- <script>

export default {
  
  name: "App",
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<template>



  <div class="container text-center mt-3">
    <div class="row align-items-center">
      <div class="col">
        <img alt="Vue logo" class="logo img-fluid" src="@/assets/logo.svg" width="125" height="125" />
      </div>
      <div class="col">
        <img alt="pinia logo" class="logo img-fluid" src="@/assets/pinia.svg" width="125" height="125" />
      </div>
      <div class="col">
        <img alt="supabase logo" class="logo img-fluid" src="@/assets/supabase.png" width="125" height="125" />
      </div>
    </div>
  </div>

  




  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink class="nav-link active" aria-current="page" to="/auth/sign-in">sign in</RouterLink>
    <RouterLink class="nav-link active" aria-current="page" to="/auth/sign-up">sign up</RouterLink>
    <RouterLink class="nav-link active" aria-current="page" to="/contact">Contact Us</RouterLink>

    <RouterView />
  </nav>


</template>


 -->


<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link" @click="closeMenu" style="font-size: 2em" to="/">Home</router-link>
    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  blockquote" :class="{ show: menuOpen }">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/contact">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
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
.navbar-nav {
  flex-direction: row;
}
.nav-link {
  padding: .5rem 1rem;
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
}
@media (min-width: 426px) {
  .navbar {
    justify-content: center;
  }
  .navbar-collapse {
    display: flex !important;
    justify-content: flex-end;
  }
  .navbar-nav {
    flex-direction: row;
    margin-left: auto;
  }
  .navbar-nav .nav-item {
    margin-left: 1rem;
  }
}
</style> -->

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link" @click="closeMenu" style="font-size: 2em" to="/">Home</router-link>
    <div class="ml-auto d-lg-flex align-items-center" id="lista">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/contact">Contact Us</router-link>
        </li>
      </ul>
    </div>
    <button class="navbar-toggler" type="button" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ show: menuOpen }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-in">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/auth/sign-up">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" @click="closeMenu" to="/contact">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
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
.nav-link {
  margin-right: 2em;
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
}
</style>