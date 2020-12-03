import { mount } from '@vue/test-utils';
import createConsumer from '../../../pages/create-consumer.vue';

describe('Display register form', () => {
  it('Should contain a form', () => {
    const wrapper = mount(createConsumer);
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
  });

  it('should send data consumer on submit form', async () => {
    const fakeFormData = {
      firstname: 'David',
      lastname: 'De Lima',
      addresses: []
    };

    const mockAxios = {
      $post: jest.fn(() => Promise.resolve(fakeFormData))
    };

    const wrapper = mount(createConsumer);
    wrapper.vm.$axios = mockAxios;

    // Call submit function on submit form.
    const response = await wrapper.vm.register(fakeFormData);

    expect(response).toBe(fakeFormData);
    expect(mockAxios.$post).toHaveBeenCalledTimes(1);
    expect(mockAxios.$post).toHaveBeenCalledWith(
      'api/consumer/create',
      fakeFormData
    );
  });
});
