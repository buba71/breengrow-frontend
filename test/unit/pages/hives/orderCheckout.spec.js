import { shallowMount } from '@vue/test-utils';
import { store, localVue } from '../../../_mocks/storeConfig.js';
import OrderCheckout from '../../../../pages/hives/order-checkout.vue';

describe('', () => {
  it('Should submit order to API when user click on submit-order', async () => {
    const mockAxios = {
      // For test, $post return an empty result but in reality return api response.
      $post: jest.fn(() => Promise.resolve())
    };

    const wrapper = shallowMount(OrderCheckout, {
      localVue,
      store,
      data: () => {
        // Set the addresses data directly on data properties component for test.
        return { addresses: [] };
      }
    });

    wrapper.vm.$axios = mockAxios;

    // Given User click on submit order.
    const submitOrder = wrapper.find('.order-submit button');
    await submitOrder.trigger('click');

    // Then the order is sent to backen API.
    expect(wrapper.vm.$axios.$post).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$axios.$post).toHaveBeenCalledWith(
      'api/orders',
      store.getters['order/currentOrder']
    );
  });
});
