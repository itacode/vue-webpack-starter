import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Foo from '../views/foo.vue';
import Bar from '../views/bar.vue';

// You don't need to do this when using global script tags.
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/foo',
    component: Foo,
    name: 'foo',
  },
  {
    path: '/bar',
    component: Bar,
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
