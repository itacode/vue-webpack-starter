import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from '../views/foo.vue';
import Bar from '../views/bar.vue';

// You don't need to do this when using global script tags.
Vue.use(VueRouter);

const routes = [
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
];
const router = new VueRouter({
  routes,
});

export default router;
