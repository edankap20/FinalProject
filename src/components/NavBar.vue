<template>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-navigation-drawer app v-model="drawer" class="d-lg-none">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/auth/sign-in">Sign In</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/auth/sign-up">Sign Up</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/contact">Contact Us</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar-items class="d-none d-lg-flex">
        <v-btn>
          <router-link to="/auth/sign-in">Sign In</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/auth/sign-up">Sign Up</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/contact">Contact Us</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false
      }
    }
  }
  </script>