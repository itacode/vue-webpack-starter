import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import TheFoo from '@/app/views/TheFoo.vue';

const store = createStore({
  state() {
    return { contents: 'Fetched data' };
  },
});

describe('TheFoo.fetchedData', () => {
  test('sanity test', () => {
    const wrapper = mount(TheFoo, {
      global: {
        plugins: [store],
      },
    });
    debugger;
    expect((wrapper.vm as any).fetchedData).toBe('Fetched data');
  });
});
