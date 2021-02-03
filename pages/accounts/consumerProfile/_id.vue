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
        No orders for moment.
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
    console.log(params);
    return true;
  },
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_CONSUMER' }
  },
  async asyncData({ $axios, params, error }) {
    try {
      const response = await $axios.$get(`api/consumers/${params.id}`);
      console.log(response);
      return {
        consumerData: response.consumer
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
    }
  }
};
</script>
