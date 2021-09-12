import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {
    contents: {},
  },
  mutations,
  actions,
  strict: debug,
});

export default store;
