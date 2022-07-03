import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TheBar from '../views/TheBar.vue';
import TheFoo from '../views/TheFoo.vue';
import TheHome from '../views/TheHome.vue';

const routes: Array<RouteRecordRaw> = [
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'main_nav_active',
});

const DEFAULT_TITLE = 'SPA App';
router.afterEach((to) => {
  document.title = to?.meta?.title as string || DEFAULT_TITLE;
});

export default router;
