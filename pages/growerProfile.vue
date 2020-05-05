<template>
  <div>
    <h1>Grower profile</h1>
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
