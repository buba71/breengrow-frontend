<template>
  <div>
    <header>
      <nav-bar></nav-bar>
      <div class="header-image"></div>
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

@media (min-width: 1200px) {
  .header-image {
    background-image: url('~assets/images/landscape1-xl.jpg');
    background-size: cover;
    height: inherit;
  }
}

@media (min-width: 998px) and (max-width: 1199px) {
  .header-image {
    background-image: url('~assets/images/landscape1-lg.jpg');
    background-size: cover;
    height: inherit;
  }
}

@media (min-width: 600px) and (max-width: 997px) {
  .header-image {
    background-image: url('~assets/images/landscape1-sl.jpg');
    background-size: cover;
    height: 100%;
  }
}
</style>
