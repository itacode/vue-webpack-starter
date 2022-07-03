import { createStore } from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';

const debug = process.env.NODE_ENV !== 'production';
const store = createStore({
  state: {
    contents: {},
  },
  mutations,
  actions,
  strict: debug,
});

export default store;
