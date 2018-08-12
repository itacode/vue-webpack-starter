import 'es6-promise/auto';
import Vue from 'vue';
import app from './components/app.vue';
import router from './router/';
import store from './store/';
import Axios from "axios";


Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});

var vm = new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
});
