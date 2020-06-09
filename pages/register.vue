<template>
  <div class="container">
    <h1>Register</h1>
    <Grower-Form />
  </div>
</template>

<script>
import RegisterGrowerForm from '../components/Forms/registergrowerForm.vue';
export default {
  components: { 'Grower-Form': RegisterGrowerForm }
};
</script>
