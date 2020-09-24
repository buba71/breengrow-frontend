<template>
  <div>
    <main>
      <h1>Login</h1>
      <div class="card card--primary">
        <div class="card__title">Connexion</div>
        <form class="form-group" @submit.prevent="login">
          <div class="input-block">
            <i class="fas fa-user icon"></i>
            <input
              v-model="userInfo.email"
              label="email"
              type="text"
              class="form-control"
            />
            <div class="input-block">
              <i class="fas fa-lock icon"></i>
              <input
                v-model="userInfo.password"
                label="password"
                type="password"
                class="form-control input-field"
              />
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn--secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
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
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.userInfo
        });
      } catch (error) {
        // console.log(error.response.data);
        this.$router.push('/error');
      }
    }
  }
};
</script>
<style scoped></style>
