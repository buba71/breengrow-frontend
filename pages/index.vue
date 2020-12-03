<template>
  <div>
    <h1>Trouver une ruche près de chez vous</h1>
    <Map :hives-data="growerList" />
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
