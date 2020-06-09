<template>
  <form class="card" @submit.prevent="submit">
    <h2>Votre société</h2>
    <Form-Factory :fields="companyForm" @input="updateCompanyData" />
    {{ dataCompany }}
    <h2>Vous</h2>
    <Form-Factory :fields="growerForm" @input="updateGrowerData" />
    {{ dataGrower }}
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
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
      dataCompany: {},
      dataGrower: {}
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
      this.dataCompany = payload;
    },
    updateGrowerData(payload) {
      this.dataGrower = payload;
    },
    async submit() {
      // const formData = { ...this.dataCompany, ...this.dataGrower };
      const formData = this.dataGrower;
      console.log('FormData', formData);
      try {
        const response = await this.$axios.$post('api/grower/create', formData);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
};
</script>
