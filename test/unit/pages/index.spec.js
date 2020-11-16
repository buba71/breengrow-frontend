import { shallowMount } from '@vue/test-utils';
import Index from '../../../pages/index.vue';

describe('Title', () => {
  it('Should display title', () => {
    const wrapper = shallowMount(Index);
    const title = wrapper.find('h1');

    expect(title.text()).toBe('Trouver une ruche près de chez vous');
  });
});
