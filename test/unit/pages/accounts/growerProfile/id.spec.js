import { mount } from '@vue/test-utils';
import Grower from '../../../../../pages/accounts/growerProfile/_id.vue';

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

  // Then  Allow testing component with asyncData hook.
  const getComponentInitialized = async function() {
    if (Grower.asyncData) {
      const originalData = Grower.data();
      const asyncData = await Grower.asyncData({
        $axios,
        params,
        error
      });
      Grower.data = function() {
        return { ...originalData, ...asyncData };
      };
    }

    return mount(Grower);
  };
  it('Should fetch grower data from Api', async () => {
    let wrapper = await getComponentInitialized();

    expect($axios.$get).toHaveBeenCalledTimes(1);
    expect($axios.$get).toHaveBeenCalledWith(`api/growers/12345`);
  });
});
