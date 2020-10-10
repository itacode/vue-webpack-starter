// polyfills
import './plugins/polyfills';

// App
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { actionsNames } from './store/actions';

new Vue({
  el: '#app',
  render: (h) => h(App),
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
