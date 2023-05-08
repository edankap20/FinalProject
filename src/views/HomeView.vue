<template>
  <main>
    <!-- Section: Design Block -->
    <section class="text-center">
      <!-- Background image -->
      <div class="p-5 bg-image" id="bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        background-position: center;
        background-size: cover;
        "></div>
      <!-- Background image -->

      <div class="card mx-3 mx-md-5 shadow" id="card" style="
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
        <div class="card-body py-5 px-md-5">

          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">Your tasks and more..</h2>
              <MyTable />
              <div id="button">
                <button class="btn btn-danger font-50 btn-sm" @click="_handleLogOut">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </main>
</template>

<script>
import userStore from '@/stores/user.js';
import { mapActions, mapState } from 'pinia';

import MyTable from '@/components/MyTable.vue'
export default {
  name: "HomeView",
  components: {
    MyTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    async _handleLogOut() {
      try {
        await this.signOut()
        this.$router.push({ name: 'signIn' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
#button {
  display: flex;
  justify-content: center;
}

@media (max-width: 1024px) {
  .bg-image {
    background-size: cover;
    background-position: center;
    height: 200px;
  }
  #card {
    margin-top: 5rem;
    margin-top: -150px;
  }
}

@media (min-width: 1024px) {
  .bg-image {
    background-size: cover;
    background-position: center;
    height: 300px;
  }
  #bg-image {
    margin-top: -123px;
  }
  #card {
    margin-top: -170px;
  }
}</style>

