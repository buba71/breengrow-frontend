<template>
  <div class="container-fluid">
    <nav class="hive-navbar">
      <div class="hive-info">{{ hiveInfo.name }}</div>
      <div class="cart-inventory" @click="showCart = !showCart">
        <div>Cart {{ itemsCounter }}</div>
      </div>
    </nav>
    <shopping-cart v-show="showCart" class="shopping-cart"></shopping-cart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'ShopNavBar',
  components: { 'shopping-cart': ShoppingCart },
  props: {
    hiveInfo: {
      type: Object,
      default: () => {}
    }
  },
  data: () => {
    return { showCart: false };
  },
  computed: {
    ...mapGetters({ itemsCounter: 'cart/getCounter' })
  }
};
</script>

<style lang="scss" scoped>
.hive-navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: burlywood;
  width: 100%;
  height: 3rem;
  color: white;
  padding: 10px;
}
.cart-inventory:hover {
  cursor: pointer;
}

.shopping-cart {
  position: absolute;
  background-color: white;
  right: 20px;
  z-index: 1;
}
</style>
