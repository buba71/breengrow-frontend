<template>
  <v-container>
    <h1>Grower profile</h1>
  </v-container>
</template>
<script>
export default {
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_GROWER' }
  }
};
</script>
