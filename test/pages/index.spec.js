import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Index from '../../pages/index.vue';

describe('Title', () => {
  Vue.use(Vuetify);

  it('Should display title', () => {
    const wrapper = shallowMount(Index);

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.text()).toBe('Breengrow');
  });
});
