<template>
  <div class="shopping-cart">
    <div>
      <h2 class="cartTotal-price">Total: {{ total }}</h2>
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
          <th class="item-description">{{ product.description }}</th>
          <th class="item-price">{{ product.price }}</th>
          <th class="item-quantity">{{ product.quantity }}</th>
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
          <th><button @click="checkoutOrder">Valid this cart ></button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

/**
 * Component usage.
 */
export default {
  name: 'ShoppingCart',
  props: {
    siret: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: () => {
    return {
      quantity: 1
    };
  },
  computed: {
    ...mapGetters({
      products: 'cart/cartProducts',
      total: 'cart/totalCartPrice',
      user: 'loggedUserState'
    }),
    orderData() {
      return {
        consumerId: this.user.parentId,
        hive_siret: this.siret,
        productsCart: this.products
      };
    }
  },
  methods: {
    incrementQuantity(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    },
    decrementQuantity(product) {
      this.$store.dispatch('cart/removeProductFromCart', product);
    },
    checkoutOrder() {
      if (!this.user) {
        this.$router.push('/security/login');
      }
      this.$store.commit('order/SET_ORDER_LINES', this.orderData);
      this.$router.push('/hives/order-checkout');
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
