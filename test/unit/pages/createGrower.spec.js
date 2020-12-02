import { mount } from '@vue/test-utils';
import createGrower from '../../../pages/create-grower.vue';

describe('Display register form', () => {
  it('Should contain a form', () => {
    const wrapper = mount(createGrower);
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
  });

  it('should send data grower to API on submit form', async () => {
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
      $post: jest.fn(() => Promise.resolve(growerDto))
    };

    const wrapper = mount(createGrower);
    wrapper.vm.$axios = mockAxios;

    // Call submit function on submit form.
    const response = await wrapper.vm.register(growerDto);

    expect(response).toBe(growerDto);
    expect(mockAxios.$post).toHaveBeenCalledTimes(1);
    expect(mockAxios.$post).toHaveBeenCalledWith(
      'api/grower/create',
      growerDto
    );
  });
});
