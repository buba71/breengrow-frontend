import DelivererConverter from '../../../../../components/Forms/FormConverters/DelivererConverter.js';

describe('Deliverer data converter', () => {
  it('Should convert data from form data to a deliverer Dto', () => {
    const delivererData = {
      firstName: 'David',
      lastName: 'De Lima',
      phone: '0664517415',
      email: 'test@test.fr',
      password: '123456',
      repeat_password: '123456'
    };

    const resulDto = DelivererConverter.convertFormDataToDto(delivererData);

    const ShouldBe = {
      firstName: 'David',
      lastName: 'De Lima',
      phone: '0664517415',
      email: 'test@test.fr',
      password: '123456',
      repeat_password: '123456',
      role: ['ROLE_DELIVERER']
    };

    expect(resulDto).toEqual(ShouldBe);
  });
});
