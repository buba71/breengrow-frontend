import { shallowMount } from '@vue/test-utils';
import Tab from '../../../../../components/Navigation/tabMenu/tab.vue';

describe('Tab component', () => {
  it('Should hide Tab if isActive is false', () => {
    const wrapper = shallowMount(Tab, {
      props: {
        name: 'My service'
      },
      slots: {
        default: '<div>This is a slot</div>'
      }
    });

    expect(wrapper.find('div').attributes('style')).toBe('display: none;');
  });
});
