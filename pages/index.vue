<template>
  <div>
    <h1>Trouver une ruche près de chez vous</h1>
    <Map />
  </div>
</template>
<script>
import Map from '../components/Mapping/Map.vue';
export default {
  layout: 'index',
  components: { Map }
};
</script>
