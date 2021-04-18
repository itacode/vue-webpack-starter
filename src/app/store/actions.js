import { mutationsNames } from './mutations';
import Axios from 'axios';

const actionsNames = { fetchContents: 'fetchContents' };

const actions = {
  async [actionsNames.fetchContents]({ commit }) {
    let res;
    try {
      res = await Axios.get(process.env.API_PATH);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching data: ${error}`);
    }
    commit(mutationsNames.setContents, res.data);
  },
};

export { actionsNames, actions };
