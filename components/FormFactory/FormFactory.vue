<template>
  <div class="grid">
    <div v-for="field in fields" :key="field.name" :class="field.className">
      <label>{{ field.name }}</label>
      <component
        :is="field.component"
        v-model="formData[field.name]"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
      />
    </div>
  </div>
</template>
<script>
import Input from './Input.vue';
export default {
  name: 'FormFactory',
  components: { Input },
  props: {
    fields: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      formData: {}
    };
  },
  watch: {
    formData(value) {
      this.$emit('input', value);
    }
  }
};
</script>
