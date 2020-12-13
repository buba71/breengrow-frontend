import { mount } from '@vue/test-utils';
import FormFactory from '../../../../components/FormFactory/FormFactory.vue';

describe('Generate input ', () => {
  it('Sould have two inputs components', () => {
    const wrapper = mount(FormFactory, {
      propsData: {
        fields: [
          {
            element: 'Input',
            type: 'text',
            name: 'lastName',
            placeholder: 'lastName',
            className: 'two'
          },
          {
            element: 'Input',
            type: 'text',
            name: 'firstName',
            placeholder: 'lastName',
            className: 'two'
          }
        ]
      }
    });

    const form = wrapper.findAll('input');

    expect(form.length).toBe(2);
  });

  it('Should mount GeoSearch component on form', () => {
    const fieldsFormMock = [
      {
        element: 'GeoSearch',
        event: 'test-event',
        label: 'city',
        className: 'two'
      }
    ];

    const wrapper = mount(FormFactory, {
      propsData: {
        fields: fieldsFormMock
      }
    });

    const form = wrapper.findAll('input');
    expect(form.length).toBe(1);
  });
});
