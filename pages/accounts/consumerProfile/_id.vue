<template>
  <div class="container">
    <h1>Your Profil</h1>
    <tabs>
      <tab-content name="My profile" :selected="true">
        LastName: {{ consumerData.lastName }}<br />
        FirstName: {{ consumerData.firstName }}<br />
        Email: {{ consumerData.email }}
      </tab-content>
      <tab-content name="Manage orders" :selected="false">
        <table>
          <thead>
            <tr>
              <th>Orders</th>
            </tr>
          </thead>
          <tr>
            <td>order number</td>
            <td>date</td>
            <td>download invoice</td>
          </tr>
          <tr v-for="order in ordersData" :key="order.number">
            <td>{{ order.number }}</td>
            <td>{{ order.registeredAt.date }}</td>
            <td>
              <button @click="download(order.invoiceFile)">download</button>
            </td>
          </tr>
        </table>
      </tab-content>
    </tabs>
    <button class="btn btn--primary" @click="logout">Logout</button>
  </div>
</template>

<script>
import Tabs from '../../../components/navigation/tabMenu/tabs';
import Tab from '../../../components/navigation/tabMenu/tab';

export default {
  components: {
    tabs: Tabs,
    'tab-content': Tab
  },
  validate({ params, query }) {
    // console.log(params);
    return true;
  },
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_CONSUMER' }
  },
  async asyncData({ $auth, $axios, params, error }) {
    try {
      const loggedInConsumerId = JSON.parse($auth.user).parentId;
      const userData = await $axios.$get(`api/consumers/${params.id}`);
      const ordersData = await $axios.$get(
        `api/orders?consumerId=${loggedInConsumerId}`
      );
      return {
        consumerData: userData.consumer,
        ordersData: ordersData.orders
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404 });
    }
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    async download(invoiceFileName) {
      try {
        const response = await this.$axios.$get(
          `api/invoice/download/${invoiceFileName}`,
          { responseType: 'blob' }
        );
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>
