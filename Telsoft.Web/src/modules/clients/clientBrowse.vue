<template>
<div>
  {{msg}}
  <arc-grid :searchAction="search" :getterName="searchResult" :columnConfig="columnConfig">
  </arc-grid>
</div>
</template>
<script>
import {
  ActionsNames,
  Getters,
} from './dataClients';

export default {
  name: 'client-browse',
  data() {
    return {
      search: ActionsNames.Search,
      searchResult: Getters.SearchResult,
      msg: 'Clientes',
      columnConfig: {
        nombre: 'Nombre',
        telefono: {
          Header: 'Tel',
        },
      },
    };
  },
};
</script>
