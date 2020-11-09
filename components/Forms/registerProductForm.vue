<template>
  <form class="card" @submit.prevent="submit">
    <form-factory :fields="productForm" @input="updateProductData" />
    {{ productData }}
    <button type="submit" class="btn btn--primary">Valider</button>
  </form>
</template>
<script>
import FormFactory from '../FormFactory/FormFactory.vue';
import { productFormType } from '../Forms/FormType/productFormType.js';
import ProductConverter from '../Forms/FormConverters/ProductConverter.js';
export default {
  name: 'RegisterProductForm',
  components: { 'form-factory': FormFactory },
  data: () => {
    return {
      productForm: [],
      productData: {}
    };
  },
  created() {
    this.productForm = productFormType();
  },
  methods: {
    submit() {
      // Add a productData converter.
      const productDto = ProductConverter.convertFormDataToDto(
        this.productData
      );
      // productDto.price = Number(productDto.price);
      this.$emit('submit-product', productDto);
    },
    updateProductData(payload) {
      this.productData = payload;
    }
  }
};
</script>
