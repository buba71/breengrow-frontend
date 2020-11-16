import { shallowMount } from '@vue/test-utils';
import Geosearch from '../../../../components/Mapping/GeoSearch.vue';

describe('hive system searching', () => {
  it('Should emit the submit event when user push "enter" key', () => {
    const wrapper = shallowMount(Geosearch);
    const geoJson = [
      {
        geometry: {
          coordinates: []
        },
        properties: {
          city: 'test0',
          context: '0, test'
        }
      },
      {
        geometry: {
          coordinates: []
        },
        properties: {
          city: 'test1',
          context: '1, test1'
        }
      }
    ];
    // arrowCounter = 0, then results[0];
    wrapper.setData({ results: geoJson, arrowCounter: 0 });
    wrapper.vm.onEnter();

    expect(wrapper.emitted().submit).toBeTruthy();
  });

  it('Should display message if a result not selected with keyboard arrows', () => {
    const wrapper = shallowMount(Geosearch);
    const geoJson = [
      {
        geometry: {
          coordinates: []
        },
        properties: {
          city: 'test0',
          context: '0, test'
        }
      },
      {
        geometry: {
          coordinates: []
        },
        properties: {
          city: 'test1',
          context: '1, test1'
        }
      }
    ];
    // arrowCounter = 0, then results[0];
    wrapper.setData({ results: geoJson, arrowCounter: -1 });
    wrapper.vm.onEnter();

    expect(wrapper.vm.flashMessage).toEqual(
      'Veuillez saisir et sélectionner une ville valide.'
    );
  });

  it('Should request gouv api when input value is setted', async () => {
    const wrapper = shallowMount(Geosearch);

    const mockAxios = {
      $get: jest.fn(() => Promise.resolve({ features: {} }))
    };
    wrapper.vm.$axios = mockAxios;

    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue('test');

    expect(wrapper.vm.$axios.$get).toBeCalledTimes(1);
    expect(wrapper.vm.$axios.$get).toHaveBeenCalledWith(
      'https://api-adresse.data.gouv.fr/search/?q=test'
    );
  });
});
