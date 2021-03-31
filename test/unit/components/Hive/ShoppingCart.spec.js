import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import ShoppingCart from '../../../../components/Hive/ShoppingCart.vue';
import {
  localVue,
  store,
  state,
  mutations,
  actions
} from './../../../_mocks/storeConfig';

describe('Display cart', () => {
  let wrapper;
  localVue.use(VueRouter);
  const router = new VueRouter();

  beforeEach(() => {
    wrapper = shallowMount(ShoppingCart, {
      localVue,
      store,
      router,
      props: {
        siret: ''
      }
    });
  });

  it('Should display cart total price', () => {
    expect(wrapper.find('.cartTotal-price').text()).toBe('Total: 4');
  });

  it('Should commit SET_ORDER_LINES mutation when valid cart', () => {
    wrapper.setProps({ siret: 'siretUuid' });

    // Given User click on button who validate cart.
    const element = wrapper.findAll('button').at(3);
    element.trigger('click');

    // Then commit order mutation who set the order.
    expect(mutations.SET_ORDER_LINES).toBeCalledTimes(1);
    expect(mutations.SET_ORDER_LINES).toHaveBeenCalledWith(state, {
      consumerId: 'consumerUuid',
      hive_siret: 'siretUuid',
      productsCart: [
        {
          description: 'Fromage de chèvre',
          id: 'productUuid',
          name: 'Fromage',
          price: 4.9,
          quantity: 4
        }
      ]
    });
  });

  it('Should dispatch addProductToCart when increment quantity', () => {
    // Given User click on + button.
    const element = wrapper.findAll('button').at(0);
    element.trigger('click');

    // Then dispatch addProductToCart cart action module.
    expect(actions.addProductToCart).toBeCalledTimes(1);
  });

  it('Should dispatch removeProductFromCart when decrement quantity', () => {
    // Given User click on - button.
    const element = wrapper.findAll('button').at(1);
    element.trigger('click');

    // Then dispatch removeProductFromCart cart action module.
    expect(actions.removeProductFromCart).toBeCalledTimes(1);
  });
});
