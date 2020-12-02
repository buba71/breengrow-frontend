<template>
  <div class="grid">
    <div v-for="(field, index) in fields" :key="index" :class="field.className">
      <label>{{ field.label }}</label>
      <!-- If form type has not event directive, render this -->
      <component
        :is="field.element"
        v-if="!field.event"
        v-model="formData[field.name]"
        :type="field.type"
        :placeholder="field.placeholder"
        :name="field.name"
      />
      <!-- else if form type has event directive render this -->
      <component
        :is="field.element"
        v-else
        @[field.event]="$emit(field.event, $event)"
      />
    </div>
  </div>
</template>
<script>
import GeoSearch from '../Mapping/GeoSearch.vue';
import Input from './Input.vue';
export default {
  name: 'FormFactory',
  components: { Input, GeoSearch },
  props: {
    fields: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      formData: {},
      event: 'submit'
    };
  },
  // computed: {
  // Could serve for dynamically import dynamic components
  // by adding this computed property instead of field.element property on dynamic component.
  //
  //   loadComponent() {
  //     const component = this.fields.filter((item) => item.element !== 'Input');
  //     // for (const component of componentsFields) {
  //     //   console.log(component.element);
  //     //   Set Dynamic multiple imports algo.
  //     // }
  //     return () => import(`../Mapping/${component.element}`);
  //   }
  // },
  watch: {
    formData(value) {
      this.$emit('input', value);
    }
  }
};
</script>
