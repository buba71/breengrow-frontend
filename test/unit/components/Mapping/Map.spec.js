import { shallowMount } from '@vue/test-utils';
import Map from '../../../../components/Mapping/Map.vue';

describe('Displaying hives from map', () => {
  it('Should filter geoPoints from Api response "growerDto List"', () => {
    // Mock api gouv response.
    const apiResponse = {
      geometry: {
        coordinates: [48, 10]
      }
    };

    // Stub Leaflet module components.
    const wrapper = shallowMount(Map, {
      stubs: {
        noSsr: true,
        lMap: true,
        lTileLayer: true,
        lCircleMarker: true
      }
    });

    wrapper.vm.$el = {
      scrollIntoView() {
        return true;
      }
    };

    // Mock Leaflet methods.
    wrapper.vm.$refs.map = {
      setZoom() {
        return true;
      },
      setCenter() {
        return true;
      }
    };

    wrapper.vm.$emit('submit-geocode', apiResponse);

    expect(wrapper.vm.lat).toBe(10);
    expect(wrapper.vm.lng).toBe(48);
  });
});
