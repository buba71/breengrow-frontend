<template>
  <div class="shopping-cart">
    <div>
      <h2>Total: {{ total }}</h2>
    </div>
    <table class="cart-content">
      <thead>
        <tr>
          <th>Description</th>
          <th>Prix</th>
          <th>Quantité</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th>{{ product.description }}</th>
          <th>{{ product.price }}</th>
          <th>{{ product.quantity }}</th>
          <th>
            <button @click="incrementQuantity(product)">+</button>
            <button @click="decrementQuantity(product)">-</button>
            <button>×</button>
          </th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th><button>Valid this cart ></button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShoppingCart',
  data: () => {
    return {
      quantity: 1
    };
  },
  computed: {
    ...mapGetters({
      products: 'cart/cartProducts',
      total: 'cart/totalCartPrice'
    })
  },
  methods: {
    incrementQuantity(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    },
    decrementQuantity(product) {
      this.$store.dispatch('cart/removeProductFromCart', product);
    }
  }
};
</script>
<style scoped>
.shopping-cart {
  margin-top: 10px;
  width: 400px;
  border: solid 1px black;
}
.cart-content {
  width: 100%;
}
</style>
