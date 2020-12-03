<template>
  <div id="map-wrap" style="height: 60vh; width: 100%">
    <geo-search @submit-geocode="setLocation" />
    <no-ssr>
      <l-map ref="map" :zoom="zoom" :center="[lat, lng]">
        <l-tile-layer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        ></l-tile-layer>
        <l-circle-marker
          v-if="hasSearch"
          :lat-lng="[lat, lng]"
          :radius="10"
          :color="'white'"
          :fill-color="'blue'"
        ></l-circle-marker>
        <l-marker
          v-for="(hiveData, index) in hivesData"
          :key="index"
          :lat-lng="[hiveData.geoPoint.latitude, hiveData.geoPoint.longitude]"
          ><l-popup
            ><div class="hive-content">
              <p>{{ hiveData.company_name }}</p>
              <p>{{ hiveData.street }}</p>
              <p>{{ hiveData.zipCode }}</p>
              <p>{{ hiveData.city }}</p>
              <a href="" @click="products"
                >Accéder aux produits de cette ruche</a
              >
            </div></l-popup
          ><l-icon
            :icon-url="require('~/assets/images/pin.png')"
            :icon-size="[20, 25]"
          ></l-icon
        ></l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>
<script>
import GeoSearch from './GeoSearch.vue';
import MetaDataExtractor from './Helpers/MetaDataExtractor.js';
export default {
  name: 'MapSearch',
  components: { 'geo-search': GeoSearch },
  props: {
    hivesData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      lat: 48.8534,
      lng: 2.3488,
      hasSearch: false,
      zoom: 5
    };
  },
  methods: {
    products() {
      this.$router.push('create-grower');
    },
    setLocation(result) {
      const latLng = MetaDataExtractor.extractGeopoint(result);
      this.hasSearch = true;
      this.$el.scrollIntoView(true);
      this.lng = latLng[0];
      this.lat = latLng[1];
      this.$refs.map.setZoom(11);
      this.$refs.map.setCenter([this.lat, this.lng]);
    }
  }
};
</script>
