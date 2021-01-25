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
      return {
        consumerData: response.consumer
      };
    } catch (err) {
      console.log(err);
      error({ statusCode: 404 });
    }
  },
  methods: {
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
    },
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
