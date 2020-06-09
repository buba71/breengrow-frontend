import { shallowMount } from '@vue/test-utils';
import RegisterGrowerForm from '../../../../components/Forms/registergrowerForm.vue';

describe('Grower Form', () => {
  it('should send data grower on submit form', async () => {
    const fakeFormData = {
      firstname: 'David',
      lastname: 'De Lima'
    };

    const mockAxios = {
      $post: jest.fn(() => Promise.resolve(fakeFormData))
    };

    const wrapper = shallowMount(RegisterGrowerForm);

    wrapper.setData({ dataGrower: fakeFormData });
    wrapper.vm.$axios = mockAxios;

    // Call submit function on submit form.
    const response = await wrapper.vm.submit();
    console.log(response);

    expect(response).toBe(fakeFormData);
    expect(mockAxios.$post).toHaveBeenCalledTimes(1);
    expect(mockAxios.$post).toHaveBeenCalledWith(
      'api/grower/create',
      fakeFormData
    );
  });
});
