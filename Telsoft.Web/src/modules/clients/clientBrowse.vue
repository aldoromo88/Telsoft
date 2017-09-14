<template>
  <div>
    Clientes
  </div>
</template>
<script>
export default {
  name: 'client-browse',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    this.$http
      .get('/api/hello')
      .then((res) => {
        this.msg = res.data.message;
      });
      // .catch(ex => console.log(ex));
  },
};
</script>
