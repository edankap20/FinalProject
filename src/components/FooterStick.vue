<template>
  <footer id="footer-botton" >
    <div class="container-fluid">
      <div class="container text-center">
        <h6>Made by Johan with the power of</h6>
        <div class="row  justify-content-center">
          <div class="col-1">
            <img class="logo" src="@/assets/logo.svg" alt="vue-logo">
            <h7>Vue</h7>
          </div>
          <div class="col-1">
            <img class="logo" src="@/assets/pinia.svg" alt="pinia-logo">
            <h7>Pinia</h7>
          </div>
          <div class="col-1">
            <img class="logo" src="@/assets/supabase.png" alt="supabase-logo">
            <h7>Supabase</h7>
          </div>
        </div>
      </div>
      </div>
  </footer>
</template>

<script>
    export default {
            name: 'FooterStick',
    }
</script>

<style scoped>
</style>