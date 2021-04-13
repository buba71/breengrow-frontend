import { mount } from '@vue/test-utils';
import GrowerProfile from '../../../../../pages/accounts/growerProfile/_id.vue';

describe('display grower profile', () => {
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
    if (GrowerProfile.asyncData) {
      const originalData = GrowerProfile.data();
      const asyncData = await GrowerProfile.asyncData({
        $axios,
        params,
        error
      });
      GrowerProfile.data = function() {
        return { ...originalData, ...asyncData };
      };
    }

    return mount(GrowerProfile);
  };
  it('Should fetch grower data from Api', async () => {
    await getComponentInitialized();

    expect($axios.$get).toHaveBeenCalledTimes(2);
    expect($axios.$get).toHaveBeenCalledWith(`api/growers/12345`);
    expect($axios.$get).toHaveBeenCalledWith(`api/orders?hiveSiret=849152123`);
  });

  it('Should send new grower data to backend API', async () => {
    const growerDto = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test',
      role: ['ROLE_GROWER'],
      hive: {
        company_name: 'Breengrow',
        siret_number: '849123456',
        street: 'Street test',
        zipCode: '112345',
        city: 'Paris',
        geoPoint: [3, 48]
      }
    };

    const mockAxios = {
      $put: jest.fn(() => Promise.resolve(growerDto))
    };

    const wrapper = mount(GrowerProfile, {
      mocks: {
        $route: {
          params: {
            id: 1
          }
        }
      }
    });
    wrapper.vm.$axios = mockAxios;

    const response = await wrapper.vm.register(growerDto);

    expect(response).toEqual(growerDto);
    expect(mockAxios.$put).toHaveBeenCalledTimes(1);
    expect(mockAxios.$put).toHaveBeenCalledWith(`/api/growers/1`, growerDto);
  });
});
