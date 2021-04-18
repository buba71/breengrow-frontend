<template>
  <div>
    <main>
      <!-- Header content -->
      <div class="user-action">
        <!-- Grid column 1/3 -->
        <section class="user-info">
          <div class="consumer-info">
            <h1>FIND A HIVE NEAR FROM YOUR HOME</h1>
            <img src="~/assets/images/bee.png" alt="bee" />
          </div>
          <div class="deliverer-info">
            <span>
              You wish to consult the list of packages awaiting delivery<br />
            </span>
            <button class="btn btn--primary">Go</button>
            <button class="btn btn__outline--primary">
              Become a delivery bee
            </button>
          </div>
        </section>
        <!-- Grid column 1/3 -->

        <!-- Grid column 2/3 -->
        <section class="search-form">
          <geo-search @submit-geocode="setCityResearch" />
        </section>
        <!-- Grid column 2/3 -->

        <!-- Grid column 3/3 -->
        <section class="section-three"></section>
        <!-- Grid column 2/3 -->
      </div>
      <!-- Header content -->
      <!-- Hives map -->
      <Map :hives-data="growerList" :city-location="cityLocation" />
    </main>
  </div>
</template>
<script>
import Map from '../components/Mapping/Map.vue';
import GeoSearch from '../components/Mapping/GeoSearch.vue';
export default {
  layout: 'index',
  components: { Map, 'geo-search': GeoSearch },
  async asyncData({ $axios, error }) {
    const { growers } = await $axios.$get(`api/growers`);
    return {
      growerList: growers
    };
  },
  data: () => {
    return {
      cityLocation: {}
    };
  },
  methods: {
    setCityResearch(result) {
      this.cityLocation = result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.user-action {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0.5rem;
  height: 2rem;
}

.user-info,
.search-form,
.section-three {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}

.consumer-info h1 {
  color: $primary-color;
}

.consumer-info img {
  position: relative;
  width: 50px;
  z-index: 1;
  animation: bee-animation 10s cubic-bezier(0.33, 0.87, 0.33, 1.16) none;
}

.user-info {
  bottom: 550px;
  width: auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: rgba(245, 245, 220, 0.4);
}

.deliverer-info {
  margin-top: 100px;
}

.deliverer-info span {
  color: $secondary-color;
}

.deliverer-info button {
  margin-top: 1rem;
  width: 152px;
}

.search-form {
  bottom: 200px;
  z-index: 0;
}

/* Animations */

@keyframes bee-animation {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(590px, 320px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
