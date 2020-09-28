import { mount } from '@vue/test-utils';
import RegisterDelivererForm from '../../../../components/Forms/RegisterDelivererForm.vue';

describe('Deliverer Form', () => {
  it('should display phone input name', () => {
    const wrapper = mount(RegisterDelivererForm);

    expect(wrapper.find('[name=phone]').exists()).toBeTruthy();
  });

  it('should display six inputs', () => {
    const wrapper = mount(RegisterDelivererForm);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(6);
  });
});
