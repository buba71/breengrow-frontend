import { mount } from '@vue/test-utils';
import FormFactory from '../../../../components/FormFactory/FormFactory.vue';

describe('Generate input ', () => {
  it('Sould have two inputs components', () => {
    const wrapper = mount(FormFactory, {
      propsData: {
        fields: [
          {
            component: 'Input',
            type: 'text',
            name: 'lastName',
            placeholder: 'lastName'
          },
          {
            component: 'Input',
            type: 'text',
            name: 'firstName',
            placeholder: 'lastName'
          }
        ]
      }
    });

    const form = wrapper.findAll('input');

    expect(form.length).toBe(2);
  });
});
