import { mount } from '@vue/test-utils';
import createDeliverer from '../../../pages/create-deliverer.vue';

describe('Display register form', () => {
  it('Should contain a form', () => {
    const wrapper = mount(createDeliverer);
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
  });

  it('Should send data deliverer to API on submit Form', async () => {
    const fakeFormData = {
      firstname: 'David',
      lastname: 'De Lima',
      phone: '0385512447'
    };

    const mockAxios = {
      $post: jest.fn(() => Promise.resolve(fakeFormData))
    };

    const wrapper = mount(createDeliverer);
    wrapper.vm.$axios = mockAxios;

    // Call submit function on submit form.
    const response = await wrapper.vm.register(fakeFormData);

    expect(response).toBe(fakeFormData);
    expect(mockAxios.$post).toHaveBeenCalledTimes(1);
    expect(mockAxios.$post).toHaveBeenCalledWith(
      'api/deliverers',
      fakeFormData
    );
  });
});
