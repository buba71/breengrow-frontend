import { shallowMount } from '@vue/test-utils';
import Index from '../../../pages/index.vue';

describe('Title', () => {
  it('Should display title', () => {
    // Should Mock growerList for passing test.
    const wrapper = shallowMount(Index, {
      data() {
        return {
          growerList: []
        };
      }
    });

    const title = wrapper.find('h1');

    expect(title.text()).toBe('Trouver une ruche près de chez vous');
  });
});
