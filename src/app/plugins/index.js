import {
  define$http
} from './axios';

function defineProperties(VueCtor) {
  define$http(VueCtor);
}

export {
  defineProperties,
};
