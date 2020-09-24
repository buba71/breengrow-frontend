import { mount } from '@vue/test-utils';
import createGrower from '../../../pages/create-grower.vue';

describe('Display register form', () => {
  it('Should contain a form', () => {
    const wrapper = mount(createGrower);
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
  });

  it('should send data grower on submit form', async () => {
    const fakeFormData = {
      firstname: 'David',
      lastname: 'De Lima',
      hive: {}
    };

    const mockAxios = {
      $post: jest.fn(() => Promise.resolve(fakeFormData))
    };

    const wrapper = mount(createGrower);
    wrapper.vm.$axios = mockAxios;

    // Call submit function on submit form.
    const response = await wrapper.vm.register(fakeFormData);
    console.log(response);

    expect(response).toBe(fakeFormData);
    expect(mockAxios.$post).toHaveBeenCalledTimes(1);
    expect(mockAxios.$post).toHaveBeenCalledWith(
      'api/grower/create',
      fakeFormData
    );
  });
});
