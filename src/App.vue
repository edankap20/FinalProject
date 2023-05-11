<template>
  <div id="aplicacion">
    <NavBar />
    <RouterView />
    <FooterStick />
  </div>
</template>


<script>
import FooterStick from '@/components/FooterStick.vue';
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    FooterStick,
    NavBar
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
</style>