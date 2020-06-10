import * as types from './mutation-types';

export default {
  [types.FETCH_CONTENTS](state, contents) {
    state.contents = contents;
  },
};
