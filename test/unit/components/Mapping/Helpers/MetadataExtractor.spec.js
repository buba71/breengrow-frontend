import MetadataExtractor from '../../../../../components/Mapping/Helpers/MetaDataExtractor.js';

describe('Extract data from gouv Api', () => {
  it('Should extract Geopoint coordinnates api response', () => {
    const metaDataFromApi = {
      geometry: {
        coordinates: [48, 25]
      },
      properties: {
        city: 'test0',
        context: '0, test'
      }
    };

    expect(MetadataExtractor.extractGeopoint(metaDataFromApi)).toMatchObject([
      48,
      25
    ]);
  });

  it('Should extract city meta data from api repsonse', () => {
    const metaDataFromApi = {
      geometry: {
        coordinates: [48, 25]
      },
      properties: {
        city: 'test0',
        context: '0, test'
      }
    };

    const resultShould = {
      city: 'test0',
      geoPoint: [48, 25]
    };

    expect(MetadataExtractor.extractCityMetaData(metaDataFromApi)).toEqual(
      resultShould
    );
  });
});
