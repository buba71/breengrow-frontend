<template>
  <div>
    <div class="content-wrapper">
      <div class="home-map">
        <div class="home-title">
          <h1 class="home-title">Trouver une ruche près de chez vous</h1>
          <div class="bee-animation">
            <img class="bee" src="~assets/images/bee.png" alt="bee" />
          </div>
        </div>
        <!-- Mapping component -->
        <Map :hives-data="growerList" />
        <!-- Mapping component -->
      </div>
    </div>
  </div>
</template>
<script>
import Map from '../components/Mapping/Map.vue';
export default {
  layout: 'index',
  components: { Map },
  async asyncData({ $axios, error }) {
    const { growers } = await $axios.$get(`api/growers`);
    return {
      growerList: growers
    };
  }
};
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.home-title {
  margin-left: 50px;
  margin-bottom: 0;
  color: $primary-color;
}

.bee {
  position: relative;
  top: 0;
  left: 0;
  width: 50px;
  animation: animate-bee 10s cubic-bezier(0.93, -0.34, 0, 1.23) none;
}

/* Bee animation */
@keyframes animate-bee {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(520px, 600px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
