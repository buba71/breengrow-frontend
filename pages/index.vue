<template>
  <div>
    <h1>Trouver une ruche près de chez vous</h1>
    <Map :geo-points="geoPointsExtractor" />
  </div>
</template>
<script>
import Map from '../components/Mapping/Map.vue';
export default {
  layout: 'index',
  components: { Map },
  async asyncData({ $axios, error }) {
    const { growers } = await $axios.$get(`api/growers`);
    console.log(growers);
    return {
      growerList: growers
    };
  },
  computed: {
    geoPointsExtractor() {
      const latLng = [];
      this.growerList.forEach((item) => latLng.push(item.geoPoint));
      return latLng;
    }
  }
};
</script>
