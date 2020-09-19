const mutationsNames = {
  setContents: 'setContents',
};

const mutations = {
  [mutationsNames.setContents](state, contents) {
    state.contents = contents;
  },
};

export { mutationsNames, mutations };
