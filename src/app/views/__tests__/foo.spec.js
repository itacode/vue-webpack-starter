import {
  mount,
} from '@vue/test-utils';
import foo from '../../views/foo.vue';
import '../../plugins';

describe('Foo.fetchedData', () => {
  test('sanity test', () => {
    const wrapper = mount(foo);
    debugger;
    expect(wrapper.vm.fetchedData).toBe(null);
  });
});
