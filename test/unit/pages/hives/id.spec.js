import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import HiveDetails from '../../../../pages/hives/_id.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('display profile', () => {
  // Mock asyncData arguments.
  const $axios = {
    $get: jest.fn(() =>
      Promise.resolve({
        grower: {
          firstName: 'john',
          lastName: 'Doe',
          email: 'test@test.com'
        },
        hive: {
          name: 'hive test',
          siretNumber: '849152123',
          street: 'street test',
          zipCode: '123456'
        },
        products: {}
      })
    )
  };
  const params = { id: '12345' };
  const error = jest.fn();

  // Mock Store for <shop-navbar> and <shopping-cart> nested components.
  const store = new Vuex.Store({
    namespaced: true,
    modules: {
      cart: {
        getters: {
          'cart/getCounter': jest.fn(),
          'cart/cartProducts': jest.fn()
        }
      }
    }
  });

  // Then  Allow testing component with asyncData hook.
  const getComponentInitialized = async function() {
    if (HiveDetails.asyncData) {
      const originalData = HiveDetails.data();
      const asyncData = await HiveDetails.asyncData({
        $axios,
        params,
        error
      });
      HiveDetails.data = function() {
        return { ...originalData, ...asyncData };
      };
    }

    return mount(HiveDetails, { store, localVue });
  };
  it('Should fetch grower data from Api', async () => {
    await getComponentInitialized();

    expect($axios.$get).toHaveBeenCalledTimes(1);
    expect($axios.$get).toHaveBeenCalledWith(`api/growers/12345`);
  });
});
