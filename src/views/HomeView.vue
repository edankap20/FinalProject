<template>
  <main class="layout">
    <section class="text-center">
      <div class="p-5 bg-image" id="bg-image"></div>
      <div class="card mx-3 mx-md-5 shadow" id="card">
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-10">
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
  </main>
</template>

<script>
import userStore from '@/stores/user.js';
import { mapActions, mapState } from 'pinia';
import MyTable from '@/components/MyTable.vue'
export default {
  name: "HomeView",
  components: {
    MyTable,
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
.layout {
  height: calc(100% + 90px);
}

#button {
  display: flex;
  justify-content: center;
}

.bg-image {
  background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
}

#card {
  margin-top: -170px;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(30px);
}

#bg-image {
  margin-top: 0px;
}

@media (min-width: 1024px) {
  .bg-image {
    background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
  }

  #bg-image {
    margin-top: 0px;
  }

  #card {
    margin-top: -170px;
    background: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(30px);
  }
}</style>

