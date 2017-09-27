<template>
<tr>
  <slot name="rowTemplate">
    <arc-cell v-for="c in visibleColumns" :propertyName="c.Key" :item="item">
    </arc-cell>
  </slot>
</tr>
</template>
<script>
import arcCell from './ArcCell';

export default {
  name: 'ArcRow',
  props: { // TODO: Add actions per row, selectionable functionality
    item: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    visibleColumns() {
      return this.columns.filter(c => c.IsVisible);
    },
  },
  components: {
    arcCell,
  },
};
</script>
