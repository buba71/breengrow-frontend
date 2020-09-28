<template>
  <div class="container">
    <h1>Create Consumer</h1>
    <consumer-form @submit-consumer="register" />
  </div>
</template>
<script>
import registerConsumerForm from '../components/Forms/registerConsumerForm.vue';
export default {
  components: { 'consumer-form': registerConsumerForm },
  methods: {
    async register(consumerDto) {
      try {
        // this.$axios.setToken(false, ['post']);
        const response = await this.$axios.$post(
          'api/consumer/create',
          consumerDto
        );
        // console.log(response);
        return response;
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>
