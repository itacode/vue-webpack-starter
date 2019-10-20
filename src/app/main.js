import './plugins/polyfills';
import Vue from 'vue';
import './plugins';
import router from './router';
import store from './store';
import app from './app.vue';

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
});
