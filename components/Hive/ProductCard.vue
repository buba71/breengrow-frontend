<template>
  <div class="card-product">
    <h1>product card</h1>
    <div>{{ product.name }}</div>
    <div>prix: {{ product.price }} euros</div>
    <button class="add-cart btn btn--primary" @click="addTocart(product)">
      Add to cart
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['cart/addItem']),
    addTocart(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    }
  }
};
</script>

<style lang="scss" scoped></style>
