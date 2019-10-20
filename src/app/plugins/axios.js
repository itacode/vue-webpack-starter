import Vue from 'Vue';
import Axios from 'axios';

// Bind Axios to Vue.
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  }
});
