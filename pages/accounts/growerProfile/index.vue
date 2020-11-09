<template>
  <div></div>
</template>
<script>
export default {
  fetch({ error }) {
    error({ statusCode: 404 });
  }
};
</script>
