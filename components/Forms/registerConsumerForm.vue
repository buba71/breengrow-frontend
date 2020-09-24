<template>
  <form class="card" @submit.prevent="submit">
    <h2>Vous</h2>
    <Form-Factory :fields="consumerForm" @input="updateConsumerData" />
    {{ consumerData }}
    <h2>Addresse(s)</h2>
    <button type="button" class="btn btn--info" @click="addAddress">
      Add an Address
    </button>
    <Form-Factory
      v-if="hasAddresses"
      :fields="consumerAddressForm"
      @input="updateConsumerAddressData"
    />
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
import ConsumerConverter from '../Forms/FormConverters/ConsumerConverter.js';
import {
  consumerFormType,
  consumerAddressFormType
} from './FormType/consumerFormType.js';

export default {
  name: 'RegisterConsumerForm',
  components: { 'Form-Factory': FormFactory },

  data: () => {
    return {
      consumerForm: [],
      consumerAddressForm: [],
      consumerData: {},
      consumerAddressData: {},
      hasAddresses: false
    };
  },

  /**
   * Building grower form.
   */
  created() {
    this.consumerForm = consumerFormType();
    this.consumerAddressForm = consumerAddressFormType();
  },
  methods: {
    addAddress() {
      return (this.hasAddresses = !this.hasAddresses);
    },
    updateConsumerAddressData(payload) {
      this.consumerAddressData = payload;
    },
    updateConsumerData(payload) {
      this.consumerData = payload;
    },
    submit() {
      const consumerDto = ConsumerConverter.convertFormDataToDto(
        this.consumerData,
        this.consumerAddressData
      );
      console.log(consumerDto);
      this.$emit('submit-consumer', consumerDto);
    }
  }
};
</script>
