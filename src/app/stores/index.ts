import Axios from 'axios';
import { defineStore } from 'pinia';

export type State = {
  contents: unknown;
};

export const useContentStore = defineStore('content', {
  state: (): State => ({
    contents: null,
  }),
  actions: {
    async fetchContents() {
      try {
        const res = await Axios.get(process.env.VUE_APP_API_PATH || '');
        this.contents = res?.data;
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    },
  },
});
