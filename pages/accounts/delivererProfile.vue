<template>
  <div>
    <h1>Deliverer profile</h1>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated',
  meta: {
    auth: { role: 'ROLE_DELIVERER' }
  }
};
</script>
