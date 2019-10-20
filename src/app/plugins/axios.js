import Axios from 'axios';

function define$http(VueCtor) {
  // Bind Axios to Vue.
  Object.defineProperty(VueCtor.prototype, '$http', {
    get() {
      return Axios;
    }
  });
}

export {
  define$http,
};
