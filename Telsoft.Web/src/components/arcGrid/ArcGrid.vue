<template>
<div v-if="result">
  <table class="table-responsive table-striped table-condensed">
    <thead>
      <tr>
        <th v-for="column in columns">
          {{column.Header}}
        </th>
      </tr>
    </thead>
    <tbody>
      <arc-row v-for="doc in result.documents" :item="doc" :columns="columns"></arc-row>
    </tbody>
  </table>
  <div>
    Page:{{page}} Size:{{size}} Total results: {{result.total}} in {{result.took}} miliseconds.
  </div>
</div>
</template>

<script>
import arcRow from './ArcRow';

export default {
  name: 'ArcGrid',
  props: {
    page: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 20,
    },
    filter: {
      type: Object,
      default: () => {},
    },
    columnConfig: {
      type: Object,
      required: true,
    },
    searchAction: {
      type: String,
      required: true,
    },
    getterName: {
      type: String,
      required: true,
    },
  },
  computed: {
    result() {
      return this.$store.getters[this.getterName];
    },
    columns() {
      if (!this.columnConfig) {
        return [];
      }

      return Object.entries(this.columnConfig).map((c) => {
        let column = {};
        if (typeof c[1] === 'string') {
          column = {
            Header: c[1],
          };
        } else {
          column = c[1];
        }

        column.Key = c[0];
        column.IsVisible = column.IsVisible === undefined ? true : column.IsVisible;
        return column;
      });
    },
  },
  methods: {
    search() {
      this.$store.dispatch(this.searchAction, {
        Page: this.page,
        Size: this.size,
        ...this.filter,
      });
    },
  },
  mounted() {
    this.search();
  },
  components: {
    arcRow,
  },
};
</script>
