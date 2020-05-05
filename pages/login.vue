<template>
  <div>
    <h1>Login</h1>
    <div class="card">
      <div class="card__title">Connexion</div>
      <form class="form-group" @submit.prevent="login">
        <div class="input-block">
          <i class="fas fa-user icon"></i>
          <input
            ref="email"
            v-model="userInfo.email"
            label="email"
            type="text"
            class="form-control"
            @keydown.down="onKeyDown"
          />
          <div class="input-block">
            <i class="fas fa-lock icon"></i>
            <input
              ref="password"
              v-model="userInfo.password"
              label="password"
              type="password"
              class="form-control input-field"
              @keydown.up="onKeyUp"
              @keydown.down="onKeyDown"
            />
          </div>
        </div>
        <div>
          <button
            ref="button"
            type="submit"
            class="btn btn__primary"
            @keydown.up="onKeyUp"
          >
            Login
          </button>
        </div>
      </form>
    </div>
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
  mounted() {
    this.$refs.email.focus();
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.userInfo
        });
      } catch (error) {
        console.log(error.response.data);
        this.$router.push('/error');
      }
    },
    onKeyDown(event) {
      const type = event.target.attributes.getNamedItem('type');

      type.nodeValue === 'password'
        ? this.$refs.button.focus()
        : this.$refs.password.focus();
    },
    onKeyUp(event) {
      const type = event.target.attributes.getNamedItem('type');

      type.nodeValue === 'password'
        ? this.$refs.email.focus()
        : this.$refs.password.focus();
    }
  }
};
</script>
<style scoped></style>
