<template>
  <div>
    <h1>Consumer Profile</h1>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_CONSUMER' }
  }
};
</script>
