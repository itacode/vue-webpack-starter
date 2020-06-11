import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '../views/TheHome.vue';
import TheFoo from '../views/TheFoo.vue';
import TheBar from '../views/TheBar.vue';

// You don't need to do this when using global script tags.
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TheHome,
    name: 'home',
  },
  {
    path: '/foo',
    component: TheFoo,
    name: 'foo',
  },
  {
    path: '/bar',
    component: TheBar,
    name: 'bar',
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

export default router;
