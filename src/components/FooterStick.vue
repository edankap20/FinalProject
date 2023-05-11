<template>
  <footer id="footer-botton">
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


<style>
.logo {
  width: 15px;
  height: 15px;
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