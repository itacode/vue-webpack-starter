import Vue from 'vue';
import Axios from 'axios';

Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});
