import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TheHome from '../views/TheHome.vue';
import TheFoo from '../views/TheFoo.vue';
import TheBar from '../views/TheBar.vue';

// You don't need to do this when using global script tags.
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: TheHome,
    name: 'home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/foo',
    component: TheFoo,
    name: 'foo',
    meta: {
      title: 'Foo',
    },
  },
  {
    path: '/bar',
    component: TheBar,
    name: 'bar',
    meta: {
      title: 'Bar',
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'main_nav_active',
});

const DEFAULT_TITLE = 'SPA App';
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to?.meta?.title || DEFAULT_TITLE;
  });
});

export default router;
