<template>
<div>
  {{msg}}
  <div v-if="SearchResult">
    Total results: {{SearchResult.total}} in {{SearchResult.took}} miliseconds.
    <div>
    </div>
  </div>
  <pre>{{SearchResult}}</pre>
</div>
</template>
<script>
import {
  mapGetters,
} from 'vuex';
import {
  ActionsNames,
  Getters,
} from './dataClients';

export default {
  name: 'client-browse',
  data() {
    return {
      msg: 'Clientes',
    };
  },
  computed: {
    ...mapGetters(Getters),
  },
  mounted() {
    this.$store.dispatch(ActionsNames.Search, {
      Page: 1,
      Size: 15,
    });
  },
};
</script>
