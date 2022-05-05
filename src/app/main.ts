// Style imports
import '../css/main.scss';

// App
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { actionsNames } from './store/actions';

new Vue({
  el: '#app',
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch(actionsNames.fetchContents);
    },
  },
  render: (h) => h(App),
  router,
  store,
});
