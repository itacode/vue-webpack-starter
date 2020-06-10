// polyfills
import './plugins/polyfills';

// App
import Vue from 'vue';
import router from './router';
import store from './store';
import app from './app.vue';
import * as types from './store/mutation-types';

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store,
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch(types.FETCH_CONTENTS);
    },
  },
});
