<template>
  <div>
    <shop-navbar :hive-info="hiveData.hive"></shop-navbar>
    <h1>Liste de nos produits</h1>
    <div class="grid">
      <div
        v-for="(product, index) in hiveData.products"
        :key="index"
        class="four card"
      >
        <product-card :product="product"></product-card>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../../components/Hive/ProductCard.vue';
import ShopNavBar from '../../components/Hive/ShopNavBar.vue';

export default {
  components: { 'product-card': ProductCard, 'shop-navbar': ShopNavBar },
  async asyncData({ params, error, $axios }) {
    try {
      const response = await $axios.$get(`api/growers/${params.id}`);
      return {
        hiveData: response
      };
    } catch (err) {
      console.log(err.response.data);
      error({ statusCode: 404 });
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
