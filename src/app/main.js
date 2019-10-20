import './plugins/polyfills';
import Vue from 'vue';
import {
  defineProperties,
} from './plugins';
import router from './router/';
import store from './store/';
import app from './app.vue';

defineProperties(Vue);

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
});
