<template>
  <div>
    Hello world
    <button @click="download">fetch api</button>
  </div>
</template>
<script>
export default {
  methods: {
    async download() {
      const response = await this.$axios.$get(
        `api/invoice/download/F202103231000`,
        { responseType: 'blob' }
      );
      console.log(response);
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  }
};
</script>
