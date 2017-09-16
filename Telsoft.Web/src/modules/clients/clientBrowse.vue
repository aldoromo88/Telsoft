<template>
<div>
  {{msg}}
</div>
</template>
<script>
import ActionsNames from './dataClients';

export default {
  name: 'client-browse',
  data() {
    return {
      msg: 'Clientes',
    };
  },
  mounted() {
    this.$store.dispatch(ActionsNames.Seach, {
      Page: 1,
      Size: 10,
    });
  },
};
</script>
