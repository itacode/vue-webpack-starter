import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  strict: debug,
  plugins,
});

export default store;
