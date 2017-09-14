import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  base: '/',
});

// router.beforeEach((to, from, next) => {
//
//   if (!to.matched.some(record => record.meta.RequiresAuth)) {
//     next();
//     return;
//   }
//   if (store.getters.CurrentUser) {
//     next();
//   } else {
//     next({
//       path: 'Home',
//       query: {
//         redirect: to.fullPath
//       }
//     });
//   }
// });


export default router;
