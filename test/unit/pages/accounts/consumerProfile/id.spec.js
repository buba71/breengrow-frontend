import { mount } from '@vue/test-utils';
import ConsumerProfile from '../../../../../pages/accounts/consumerProfile/_id.vue';

describe('display consumer profile', () => {
  // Mock asyncData arguments:
  // Mock $axios module.
  const $axios = {
    $get: jest.fn()
  };

  const mockConsumerData = {
    consumer: {
      lastName: 'Doe',
      firstName: 'John',
      email: 'doe@gmail.com'
    }
  };

  const mockOrdersData = {
    orders: [
      {
        number: '123456',
        registeredAt: 'dateObject',
        orderlines: 'orderlines',
        amount: 123,
        status: 7
      }
    ]
  };

  $axios.$get.mockImplementation((url) => {
    switch (url) {
      case `api/consumers/12345`:
        return Promise.resolve(mockConsumerData);
      case `api/orders?consumerId=12345`:
        return Promise.resolve(mockOrdersData);
    }
  });

  // Mock $auth module with a logged consumer.
  const $auth = {
    user:
      '{"parentId":"12345","roles":["ROLE_CONSUMER"],"username":"doe@gmail.com"}'
  };

  // Mock url params with consumer id who is logged in.
  const params = { id: '12345' };

  // Mock error function.
  const error = jest.fn();

  // Then  Allow testing component with asyncData hook.
  const getComponentInitialized = async function() {
    if (ConsumerProfile.asyncData) {
      const originalData = ConsumerProfile.data();
      const asyncData = await ConsumerProfile.asyncData({
        $auth,
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

    expect($axios.$get).toHaveBeenCalledTimes(2);
    expect($axios.$get).toHaveBeenCalledWith(`api/consumers/12345`);
    expect($axios.$get).toHaveBeenCalledWith(`api/orders?consumerId=12345`);
  });
});
