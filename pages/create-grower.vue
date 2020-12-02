<template>
  <div class="container">
    <h1>Create Grower</h1>
    <grower-form @submit-grower="register" />
  </div>
</template>

<script>
import RegisterGrowerForm from '../components/Forms/registerGrowerForm.vue';
export default {
  components: { 'grower-form': RegisterGrowerForm },
  methods: {
    async register(growerDto) {
      try {
        // this.$axios.setToken(false, ['post']);
        const response = await this.$axios.$post(
          'api/grower/create',
          growerDto
        );
        return response;
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>
