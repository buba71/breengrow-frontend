<template>
  <form class="card" @submit.prevent="submit">
    <h2>Votre société</h2>
    <Form-Factory :fields="companyForm" @input="updateCompanyData" />
    <h2>Vous</h2>
    <Form-Factory :fields="growerForm" @input="updateGrowerData" />
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
import GrowerConverter from '../Forms/FormConverters/GrowerConverter.js';
import {
  growerFormType,
  growerCompanyAdressType
} from './FormType/growerFormType.js';

export default {
  name: 'RegisterGrowerForm',
  components: { 'Form-Factory': FormFactory },

  data: () => {
    return {
      companyForm: [],
      growerForm: [],
      companyData: {},
      growerData: {}
    };
  },

  /**
   * Building grower form.
   */
  created() {
    this.companyForm = growerCompanyAdressType();
    this.growerForm = growerFormType();
  },
  methods: {
    updateCompanyData(payload) {
      this.companyData = payload;
    },
    updateGrowerData(payload) {
      this.growerData = payload;
    },
    submit() {
      const growerDto = GrowerConverter.convertFormDataToDto(
        this.growerData,
        this.companyData
      );
      this.$emit('submit-grower', growerDto);
    }
  }
};
</script>
