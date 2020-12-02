<template>
  <form class="card" @submit.prevent="submit">
    <h2>Votre société</h2>
    <form-factory
      :fields="companyForm"
      @input="updateCompanyData"
      @submit-geocode="setCityLocation"
    />
    <h2>Vous</h2>
    <form-factory :fields="growerForm" @input="updateGrowerData" />
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
import GrowerConverter from '../Forms/FormConverters/GrowerConverter.js';
import {
  growerFormType,
  growerCompanyAddressFormType
} from './FormType/growerFormType.js';

export default {
  name: 'RegisterGrowerForm',
  components: { 'form-factory': FormFactory },

  data: () => {
    return {
      companyForm: [],
      growerForm: [],
      companyData: {},
      growerData: {},
      cityMetaData: {}
    };
  },

  /**
   * Building grower form.
   */
  created() {
    this.companyForm = growerCompanyAddressFormType();
    this.growerForm = growerFormType();
  },
  methods: {
    updateCompanyData(payload) {
      this.companyData = payload;
    },
    updateGrowerData(payload) {
      this.growerData = payload;
    },
    setCityLocation(result) {
      this.cityMetaData = result;
    },
    submit() {
      const growerDto = GrowerConverter.convertFormDataToDto(
        this.growerData,
        this.companyData,
        this.cityMetaData
      );
      this.$emit('submit-grower', growerDto);
    }
  }
};
</script>
