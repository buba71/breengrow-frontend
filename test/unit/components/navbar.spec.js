/* eslint-disable no-labels */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Navbar from '../../../components/Navigation/navbar.vue';
import {
  StoreNotLoggedMock,
  StoreLoggedAsGrowerMock,
  StoreLoggedAsConsumerMock
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

    expect(wrapper.vm.route).toBe('/security/login');
    expect(wrapper.vm.linkToDisplay).toBe('Se connecter');
  });

  it(`Shoult display 'accéder à ma ruche' if user is logged and role= ROLE_GROWER and set route link to'/accounts/growerProfile`, () => {
    store = StoreLoggedAsGrowerMock(getters, store);

    const wrapper = shallowMount(Navbar, {
      stubs: ['nuxt-link'],
      store,
      localVue
    });

    expect(wrapper.vm.route).toBe('/accounts/growerProfile');
    expect(wrapper.vm.linkToDisplay).toBe('accéder à ma ruche');
  });

  it(`Should display 'accéder à mon compte client' if user is logged and role= ROLE_CONSUMER and set route to /accounts/consumerProfile`, () => {
    store = StoreLoggedAsConsumerMock(getters, store);

    const wrapper = shallowMount(Navbar, {
      stubs: ['nuxt-link'],
      store,
      localVue
    });

    expect(wrapper.vm.route).toBe('/accounts/consumerProfile');
    expect(wrapper.vm.linkToDisplay).toBe('accéder à mon compte');
  });
});
