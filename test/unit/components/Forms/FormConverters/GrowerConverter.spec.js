import GrowerConverter from './../../../../../components/Forms/FormConverters/GrowerConverter.js';

describe('Consumer data converter', () => {
  it('Should convert data from form to a grower Dto', () => {
    const growerDataInput = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test'
    };

    const growerCompanyDataInput = {
      company_name: 'Breengrow',
      siret_number: '849123456',
      street: 'Street test',
      zipCode: '112345'
    };

    const cityMetaDataFromApiInput = {
      geometry: {
        coordinates: [3, 48]
      },
      properties: {
        city: 'test0',
        context: '0, test'
      }
    };

    const resultDto = GrowerConverter.convertFormDataToDto(
      growerDataInput,
      growerCompanyDataInput,
      cityMetaDataFromApiInput
    );

    const shouldDto = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test',
      role: ['ROLE_GROWER'],
      hive: {
        company_name: 'Breengrow',
        siret_number: '849123456',
        street: 'Street test',
        zipCode: '112345',
        city: 'test0',
        geoPoint: [3, 48]
      }
    };

    expect(resultDto).toEqual(shouldDto);
  });
});
