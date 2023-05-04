<script>
import userStore from '@/stores/user.js';
import { mapActions, mapState } from 'pinia';

import MyTable from '@/components/MyTable.vue'
  export default {
    name: "HomeView",
    components: {
      MyTable
    },
    data () {
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
        } catch(err) {
          console.error(err)
        }
      }
    }
  }
</script>

<template>
  <main>
    <h1>Home View</h1>
    <button class="btn btn-secondary font-50" @click="_handleLogOut">Log Out</button>
    <MyTable />
  </main>
</template>
