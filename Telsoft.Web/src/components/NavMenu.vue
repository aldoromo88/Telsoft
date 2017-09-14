<template>
<ul class="nav nav-pills nav-stacked" style="margin-top:5px">
  <router-link v-for="r in routes" v-bind:to="r.path" tag="li">
    <a>
      <span><i class="fa" v-bind:class="r.Icon"></i></span> {{r.Display}}
    </a>
  </router-link>
</ul>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'NavMenu',
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
};
</script>
