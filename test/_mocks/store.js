import Vuex from 'vuex';

export function StoreNotLoggedMock(getters, store) {
  getters = {
    loggedUserState() {},
    isLogged() {}
  };

  return new Vuex.Store({ getters });
}

export function StoreLoggedAsGrowerMock(getters, store) {
  getters = {
    loggedUserState() {
      return {
        roles: ['ROLE_GROWER'],
        parentId: 123456
      };
    },
    isLogged() {
      return true;
    }
  };

  return new Vuex.Store({ getters });
}

export function StoreLoggedAsConsumerMock(getters, store) {
  getters = {
    loggedUserState() {
      return {
        roles: ['ROLE_CONSUMER'],
        parentId: 123456
      };
    },
    isLogged() {
      return true;
    }
  };

  return new Vuex.Store({ getters });
}

export function StoreLoggedAsDelivererMock(getters, store) {
  getters = {
    loggedUserState() {
      return { roles: ['ROLE_DELIVERER'] };
    },
    isLogged() {
      return true;
    }
  };

  return new Vuex.Store({ getters });
}
