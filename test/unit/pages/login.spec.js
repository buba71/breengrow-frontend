import { mount } from '@vue/test-utils';
import Login from '../../../pages/security/login.vue';

const authMock = {
  loginWith: jest.fn(() => Promise.resolve())
};

const wrapper = mount(Login, {
  mocks: {
    $auth: authMock
  }
});

describe('Authenticating user', () => {
  it('Should call the login method', () => {
    wrapper.find('button').trigger('submit.prevent');
    expect(authMock.loginWith).toBeCalledTimes(1);
  });

  it('Should call login with input values', () => {
    const userInfoMock = {
      email: 'buba@gmail.com',
      password: 'abcd'
    };

    wrapper.find('input[type="text"]').setValue(userInfoMock.email);
    wrapper.find('input[type="password"]').setValue(userInfoMock.password);
    wrapper.find('button').trigger('submit.prevent');

    expect(authMock.loginWith).toHaveBeenCalledWith('local', {
      data: userInfoMock
    });
  });
});
