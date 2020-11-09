<template>
  <div>
    <header>
      <nav-bar></nav-bar>
      <input type="search" /><button class="btn btn--secondary">
        search
      </button>
    </header>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue';
import navbar from '../components/Navigation/navbar.vue';

export default Vue.extend({
  components: { 'nav-bar': navbar },
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.card {
  top: 15rem;
  background-color: $primary-color;
  width: 50%;
}
</style>
