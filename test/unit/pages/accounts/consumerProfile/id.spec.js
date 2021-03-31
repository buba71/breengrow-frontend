import { mount } from '@vue/test-utils';
import ConsumerProfile from '../../../../../pages/accounts/consumerProfile/_id.vue';

describe('display consumer profile', () => {
  // Mock asyncData arguments.
  const $axios = {
    $get: jest.fn(() =>
      Promise.resolve({
        consumer: {}
      })
    )
  };
  const params = { id: '12345' };
  const error = jest.fn();

  // Then  Allow testing component with asyncData hook.
  const getComponentInitialized = async function() {
    if (ConsumerProfile.asyncData) {
      const originalData = ConsumerProfile.data();
      const asyncData = await ConsumerProfile.asyncData({
        $axios,
        params,
        error
      });
      ConsumerProfile.data = function() {
        return { ...originalData, ...asyncData };
      };
    }

    return mount(ConsumerProfile);
  };
  it('Should fetch consumer data from Api', async () => {
    await getComponentInitialized();

    expect($axios.$get).toHaveBeenCalledTimes(1);
    expect($axios.$get).toHaveBeenCalledWith(`api/consumers/12345`);
  });
});
