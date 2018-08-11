import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from './components/foo.vue';
import Bar from './components/bar.vue';

// You don't need to do this when using global script tags.
Vue.use(VueRouter);

const routes = [
  {
    path: '/foo',
    component: Foo,
    name: 'foo'
  },
  {
    path: '/bar',
    component: Bar,
    name: 'bar'
  }
];

export default new VueRouter({
  routes
});
