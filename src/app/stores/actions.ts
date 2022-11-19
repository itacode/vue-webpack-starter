import Axios from 'axios';
import { Commit } from 'vuex';
import { mutationsNames } from './mutations';

const actionsNames = { fetchContents: 'fetchContents' };

const actions = {
  async [actionsNames.fetchContents]({
    commit,
  }: {
    commit: Commit;
  }): Promise<void> {
    let res;
    try {
      res = await Axios.get(process.env.VUE_APP_API_PATH || '');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error fetching data: ${error}`);
    }
    commit(mutationsNames.setContents, res?.data);
  },
};

export { actionsNames, actions };
