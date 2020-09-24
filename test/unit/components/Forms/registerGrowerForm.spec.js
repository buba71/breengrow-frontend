import { mount } from '@vue/test-utils';
import RegisterGrowerForm from '../../../../components/Forms/registergrowerForm.vue';

describe('Grower Form', () => {
  it('should display siret_number name input', () => {
    const wrapper = mount(RegisterGrowerForm);

    expect(wrapper.find('[name=siret_number]').exists()).toBeTruthy();
  });

  it('should display ten inputs', () => {
    const wrapper = mount(RegisterGrowerForm);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(10);
  });
});
