// Store mock config for tests.
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

export const localVue = createLocalVue();
localVue.use(Vuex);
// Set state order to an object(not function for this test).
export const state = {
  order: {
    consumerId: '',
    hive_siret: '',
    orderLines: []
  }
};

// Set state auth module.
export const getters = {
  loggedUserState() {
    return {
      parentId: 'consumerUuid'
    };
  }
};

// Set order mutations.
export const mutations = {
  SET_ORDER_LINES: jest.fn()
};

// Set Cart actions.
export const actions = {
  addProductToCart: jest.fn(),
  removeProductFromCart: jest.fn()
};

// Store config.
export const store = new Vuex.Store({
  getters,
  modules: {
    /**
     * Cart store module.
     */
    cart: {
      namespaced: true,
      state: () => ({
        cart: []
      }),
      getters: {
        totalCartPrice() {
          return 4;
        },
        cartProducts() {
          return [
            {
              id: 'productUuid',
              name: 'Fromage',
              description: 'Fromage de chèvre',
              price: 4.9,
              quantity: 4
            }
          ];
        }
      },
      actions
    },
    /**
     * Order store module.
     */
    order: {
      namespaced: true,
      state,
      getters: {
        currentOrder(state) {
          return state.order;
        }
      },
      mutations
    }
  }
});
