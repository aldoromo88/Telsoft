<template>
  <td>
    <slot :name="propertyName">
      {{value}}
    </slot>
  </td>
</template>
<script>
export default {
  name: 'ArcCell',
  props: {
    propertyName: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    value() {
      return this.item[this.propertyName];
    },
  },
};
</script>
