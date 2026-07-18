import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';

import { useContentStore } from '@/app/stores';
import TheFoo from '@/app/views/TheFoo.vue';

describe('TheFoo.fetchedData', () => {
  test('sanity test', () => {
    const pinia = createPinia();
    setActivePinia(pinia);

    // Get an instance of your content store
    const contentStore = useContentStore();

    // Mock the state directly for the test
    contentStore.contents = 'Mocked data';

    const wrapper = mount(TheFoo, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.vm.fetchedData).toBe('Mocked data');
  });
});
