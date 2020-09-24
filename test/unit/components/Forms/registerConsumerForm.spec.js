import { mount } from '@vue/test-utils';
import RegisterConsumerForm from '../../../../components/Forms/registerConsumerForm.vue';

describe('Consumer Form', () => {
  it('Should display Address Form when click addAddress button', async () => {
    const wrapper = mount(RegisterConsumerForm);
    await wrapper.find('button').trigger('click');

    expect(wrapper.find('[name=zipCode]').exists()).toBeTruthy();
  });

  // Address form is not displayed on component rendering.
  it('Should display five inputs on render', () => {
    const wrapper = mount(RegisterConsumerForm);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(5);
  });
});
