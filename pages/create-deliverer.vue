<template>
  <div class="container">
    <deliverer-form @submit-deliverer="register" />
  </div>
</template>
<script>
import RegisterDelivererForm from '~/components/Forms/RegisterDelivererForm.vue';

export default {
  components: { 'deliverer-form': RegisterDelivererForm },
  methods: {
    async register(delivererDto) {
      console.log(delivererDto);
      try {
        const response = await this.$axios.$post(
          'api/deliverers',
          delivererDto
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>
