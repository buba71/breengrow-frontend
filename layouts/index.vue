<template>
  <div>
    <header>
      <nav-bar></nav-bar>
      <div class="img-header"></div>
      <div class="card">
        <div class="card__frame">
          <div class="card__title">title</div>
          <input type="search" /><button class="btn btn--secondary">
            rechercher
          </button>
        </div>
      </div>
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
  top: -15rem;
  background-color: $primary-color;
}
</style>
