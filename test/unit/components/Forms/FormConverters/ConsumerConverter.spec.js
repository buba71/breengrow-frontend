import ConsumerConverter from './../../../../../components/Forms/FormConverters/ConsumerConverter.js';

describe('Consumer data converter', () => {
  it('Should convert data from form to a consumer Dto', () => {
    const consumerData = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test'
    };

    const consumerAddressData = {
      firstName: 'David',
      lastName: 'De lima',
      street: 'Street test',
      zipCode: '112345',
      city: 'Paris'
    };

    const resultDto = ConsumerConverter.convertFormDataToDto(
      consumerData,
      consumerAddressData
    );

    const shouldDto = {
      firstName: 'David',
      lastName: 'De Lima',
      email: 'test@test.com',
      password: 'test',
      repeat_password: 'test',
      addresses: [
        {
          firstName: 'David',
          lastName: 'De lima',
          street: 'Street test',
          zipCode: '112345',
          city: 'Paris'
        }
      ],
      role: ['ROLE_CONSUMER']
    };

    expect(resultDto).toEqual(shouldDto);
  });
});