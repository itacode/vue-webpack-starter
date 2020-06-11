import Vuex from 'Vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import TheFoo from '../../views/TheFoo.vue';
import '../../plugins/polyfills';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contents: 'Fetched data',
  },
});

describe('TheFoo.fetchedData', () => {
  test('sanity test', () => {
    const wrapper = mount(TheFoo, {
      store,
      localVue,
    });
    debugger;
    expect(wrapper.vm.fetchedData).toBe('Fetched data');
  });
});
