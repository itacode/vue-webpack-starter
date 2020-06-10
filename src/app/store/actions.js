import * as types from './mutation-types';
import Axios from 'axios';
import { env } from '../.env';

export default {
  async [types.FETCH_CONTENTS]({ commit }) {
    let res;
    try {
      res = await Axios.get(env.apiEndpoint);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
    commit(types.FETCH_CONTENTS, res.data);
  },
};
