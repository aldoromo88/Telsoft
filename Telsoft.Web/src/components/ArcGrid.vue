<template>
<ul class="nav nav-pills nav-stacked" style="margin-top:5px">
  <router-link v-for="r in routes" :key="r.path" v-bind:to="r.path" tag="li">
    <a>
      <span><i class="fa" v-bind:class="r.Icon"></i></span> {{r.Display}}
    </a>
  </router-link>
</ul>
</template>

<script>
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
      default: {},
    },
    columnConfig: {
      type: Object,
      default: {},
    },
    searchAction: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      routes: routes.filter(f => (f.meta ? f.meta.ShowInMenu : false))
        .map(r => ({
          path: r.meta.defaultPath ? r.meta.defaultPath : r.path,
          Icon: r.meta.Icon,
          Display: r.meta.Display,
        })),
    };
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
};
</script>
