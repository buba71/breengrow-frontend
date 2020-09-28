<template>
  <form class="card" @submit.prevent="submit">
    <h2>Vous</h2>
    <form-factory :fields="delivererForm" @input="updateDelivererData" />
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
import { delivererFormType } from '../Forms/FormType/delivererFormType.js';
import DelivererConverter from '../Forms/FormConverters/DelivererConverter.js';

export default {
  name: 'RegisterDelivererForm',
  components: { 'form-factory': FormFactory },
  data: () => {
    return {
      delivererForm: [],
      delivererData: {}
    };
  },
  created() {
    this.delivererForm = delivererFormType();
  },
  methods: {
    updateDelivererData(payload) {
      this.delivererData = payload;
    },
    submit() {
      const delivererDto = DelivererConverter.convertFormDataToDto(
        this.delivererData
      );
      this.$emit('submit-deliverer', delivererDto);
    }
  }
};
</script>
