<template>
  <div class="container">
    <h1>Your Profil</h1>
    <tabs>
      <tab-content name="My profile" :selected="true">
        LastName: {{ growerData.lastName }}<br />
        FirstName: {{ growerData.firstName }}<br />
        Email: {{ growerData.email }}
      </tab-content>
      <tab-content name="Manage Hive" :selected="false">
        Name: {{ hiveData.name }}<br />
        Siret number: {{ hiveData.siretNumber }}<br />
        Street: {{ hiveData.street }}<br />
        Zip code: {{ hiveData.zipCode }}
      </tab-content>
      <tab-content name="products" :selected="false">
        <button class="btn btn--primary" @click="showProductForm">
          Ajouter un nouveau produit
        </button>
        <product-form v-show="hasProductForm" @submit-product="register" />
        {{ productsData }}
      </tab-content>
      <tab-content name="Manage orders" :selected="false">
        <table>
          <thead>
            <tr>
              <th>Orders recieved</th>
            </tr>
          </thead>
          <tr>
            <td>order number</td>
            <td>date</td>
            <td>Status</td>
          </tr>
          <tr v-for="order in ordersData" :key="order.number">
            <td>{{ order.number }}</td>
            <td>{{ order.registeredAt.date }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </table>
      </tab-content>
    </tabs>
  </div>
</template>

<script>
import Tabs from '../../../components/navigation/tabMenu/tabs';
import Tab from '../../../components/navigation/tabMenu/tab';
import RegisterProductForm from '../../../components/Forms/registerProductForm.vue';
export default {
  components: {
    tabs: Tabs,
    'tab-content': Tab,
    'product-form': RegisterProductForm
  },
  validate({ params, query }) {
    console.log(params);
    return true;
  },
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_GROWER' }
  },
  async asyncData({ $axios, params, error }) {
    try {
      const userData = await $axios.$get(`api/growers/${params.id}`);
      const ordersData = await $axios.$get(
        `api/orders?hiveSiret=${userData.hive.siretNumber}`
      );
      return {
        growerData: userData.grower,
        hiveData: userData.hive,
        productsData: userData.products,
        ordersData: ordersData.orders
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404 });
    }
  },
  data() {
    return {
      hasProductForm: false
    };
  },
  methods: {
    showProductForm() {
      this.hasProductForm = true;
    },
    async register(growerDto) {
      try {
        const response = await this.$axios.$put(
          `/api/growers/${this.$route.params.id}`,
          growerDto
        );
        this.hasProductForm = false;
        return response;
      } catch (err) {
        console.log(err.response);
      }
    }
  }
};
</script>
