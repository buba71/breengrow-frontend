<template>
  <div>
    <h1>Grower Profile</h1>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_GROWER' }
  }
};
</script>
