import { mount } from '@vue/test-utils';
import RegisterProductForm from '../../../../components/Forms/registerProductForm.vue';

describe('Product Form', () => {
  it('Should display price input', () => {
    const wrapper = mount(RegisterProductForm);

    expect(wrapper.find('[name = price]').exists()).toBeTruthy();
  });

  it('Should display  three inputs', () => {
    const wrapper = mount(RegisterProductForm);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(3);
  });
});
