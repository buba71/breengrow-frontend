<template>
  <div class="container">
    <div class="order-content">
      <h1>Your order checkout</h1>
      <table>
        <thead>
          <tr>
            <th>désignation</th>
            <th>quantité</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <th>{{ product.description }}</th>
            <th>{{ product.price }}</th>
            <th>{{ product.quantity }}</th>
          </tr>
        </tbody>
      </table>
      <h2>Total</h2>
      {{ total }}
    </div>
    <div class="addresses-content">
      <h2>
        Your shipping address
      </h2>
      <div class="grid">
        <div
          v-for="(address, index) in addresses"
          :key="index"
          class="card two"
        >
          <address>
            <p>
              <strong>{{ address.firstName }} {{ address.lastName }}</strong>
            </p>
            <p>{{ address.street }}</p>
            <p>{{ address.zipCode }} {{ address.city }}</p>
          </address>

          <button class="btn">Choose this address</button>
        </div>
      </div>
    </div>
    <div class="order-submit">
      <button class="btn btn--primary" @click="submitOrder">
        Valid my order
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'OrderCheckout',
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_CONSUMER' }
  },
  async asyncData({ store, $axios, params, error }) {
    const user = store.getters.loggedUserState.parentId;
    try {
      const response = await $axios.$get(`api/consumers/${user}`);
      return {
        addresses: response.addresses
      };
    } catch (err) {
      console.log(err.response.data);
      error({ statusCode: 404 });
    }
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters({
      user: 'loggedUserState',
      products: 'cart/cartProducts',
      total: 'cart/totalCartPrice',
      order: 'order/currentOrder'
    })
  },
  methods: {
    async submitOrder() {
      try {
        const response = await this.$axios.$post(`api/orders`, this.order);
        console.log(response);
      } catch (err) {
        console.log(err.response);
      }
    }
  }
};
</script>
