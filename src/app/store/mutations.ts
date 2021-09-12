const mutationsNames = {
  setContents: 'setContents',
};

const mutations = {
  [mutationsNames.setContents](
    state: Record<string, unknown>,
    contents: unknown
  ): void {
    state.contents = contents;
  },
};

export { mutationsNames, mutations };
