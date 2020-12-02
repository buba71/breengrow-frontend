import { mount } from '@vue/test-utils';
import RegisterGrowerForm from '../../../../components/Forms/registergrowerForm.vue';

describe('Grower Form', () => {
  it('Should display siret_number name input', () => {
    const wrapper = mount(RegisterGrowerForm);

    expect(wrapper.find('[name=siret_number]').exists()).toBeTruthy();
  });

  it('Should display ten inputs', () => {
    const wrapper = mount(RegisterGrowerForm);
    const inputs = wrapper.findAll('input');

    expect(inputs.length).toBe(10);
  });

  it('Should call submit method on submitting form', () => {
    const wrapper = mount(RegisterGrowerForm);

    const mockMethod = jest.fn();
    wrapper.setMethods({ submit: mockMethod });

    wrapper.find('form').trigger('submit');
    expect(mockMethod).toHaveBeenCalledTimes(1);
  });

  it('Should emit submit-grower event when submitting form', () => {
    const wrapper = mount(RegisterGrowerForm);

    wrapper.setData({
      cityMetaData: {
        properties: { city: 'digoin' },
        geometry: { coordinates: [] }
      }
    });

    wrapper.vm.submit();
    expect(wrapper.emitted('submit-grower')).toBeTruthy();
  });
});
