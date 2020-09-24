import GrowerConverter from './../../../../../components/Forms/FormConverters/GrowerConverter.js';

describe('Consumer data converter', () => {
  it('Should convert data from form to a consumer Dto', () => {
    const growerData = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test'
    };

    const growerCompanyData = {
      company_name: 'Breengrow',
      siret_number: '849123456',
      street: 'Street test',
      zipCode: '112345',
      city: 'Paris'
    };

    const resultDto = GrowerConverter.convertFormDataToDto(
      growerData,
      growerCompanyData
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
        city: 'Paris'
      }
    };

    expect(resultDto).toEqual(shouldDto);
  });
});
