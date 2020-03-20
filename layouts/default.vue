<template>
  <v-app>
    <v-app-bar
      class="text-right"
      justify-end
      color="blue-grey lighten-3"
      app
      tag="header"
    >
      <v-layout justify-end>
        <div>
          <nuxt-link class="navbar-item mr-5" to="/growerProfile">
            My profile
          </nuxt-link>
          <nuxt-link class="navbar-item mr-5" to="/register">
            Sign Up
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/login">
            Sign In
          </nuxt-link>
        </div>
      </v-layout>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
});
</script>

<style scoped>
a {
  color: #000;
}
</style>
