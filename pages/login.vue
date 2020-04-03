<template>
  <v-container tag="section">
    <h1>Login</h1>
    <v-form @submit.prevent="login">
      <v-text-field v-model="userInfo.email" label="email" />
      <v-text-field
        v-model="userInfo.password"
        label="password"
        type="password"
      />
      <div class="mt-5">
        <v-btn type="submit" color="primary" tag="button">
          Login
        </v-btn>
      </div>
    </v-form>
    {{ loggedIn }}
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        email: '',
        password: ''
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.userInfo
        });
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>
