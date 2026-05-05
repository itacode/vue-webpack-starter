import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import TheFoo from '@/app/views/TheFoo.vue';
import { useContentStore } from '@/app/stores';

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
