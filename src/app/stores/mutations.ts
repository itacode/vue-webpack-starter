import { State } from 'vue';

const mutationsNames = {
  setContents: 'setContents',
};

const mutations = {
  [mutationsNames.setContents](state: State, contents: unknown): void {
    state.contents = contents;
  },
};

export { mutationsNames, mutations };
