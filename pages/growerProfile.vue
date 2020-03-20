<template>
  <v-container>
    <h1>Grower profile</h1>
  </v-container>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  middleware: 'authenticated',
  meta: {
    auth: { role: 'GROWER_ROLE' }
  }
});
</script>
