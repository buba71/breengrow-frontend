import { mount } from '@vue/test-utils';
import registerGrower from '../../../pages/register.vue';

describe('Display register form', () => {
  it('Should contain a form', () => {
    const wrapper = mount(registerGrower);
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
  });

  it('should display company name input', () => {
    const wrapper = mount(registerGrower);

    const inputName = wrapper.find('input').attributes('name');
    const inputType = wrapper.find('input').attributes('type');

    expect(inputName).toBe('company name');
    expect(inputType).toBe('text');
  });

  it('should display seven inputs', () => {
    const wrapper = mount(registerGrower);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(10);
  });
});
