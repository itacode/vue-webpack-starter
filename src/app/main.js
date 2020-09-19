// polyfills
import './plugins/polyfills';

// App
import Vue from 'vue';
import router from './router';
import store from './store';
import TheApp from './TheApp.vue';
import { actionsNames } from './store/actions';

new Vue({
  el: '#app',
  render: h => h(TheApp),
  router,
  store,
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch(actionsNames.fetchContents);
    },
  },
});
