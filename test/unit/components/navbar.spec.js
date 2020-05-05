/* eslint-disable no-labels */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Navbar from '../../../components/navbar.vue';
import {
  StoreNotLoggedMock,
  StoreLoggedAsGrowerMock
} from '../../_mocks/store.js';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Navigation guard', () => {
  let store;
  let getters;

  it(`Should display 'se connecter' if user not logged in and set route link to '/login'`, () => {
    store = StoreNotLoggedMock(getters, store);

    const wrapper = shallowMount(Navbar, {
      stubs: ['nuxt-link'],
      store,
      localVue
    });

    expect(wrapper.vm.route).toBe('/login');
    expect(wrapper.vm.linkToDisplay).toBe('Se connecter');
  });

  it(`Shoult display 'accéder à ma ruche' if user is logged and role= ROLE_GROWER and set route link to'/growerProfile`, () => {
    store = StoreLoggedAsGrowerMock(getters, store);

    const wrapper = shallowMount(Navbar, {
      stubs: ['nuxt-link'],
      store,
      localVue
    });

    expect(wrapper.vm.route).toBe('/growerProfile');
    expect(wrapper.vm.linkToDisplay).toBe('accéder à ma ruche');
  });
});
