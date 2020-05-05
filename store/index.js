export const state = () => {
  return {};
};

export const getters = {
  isLogged(state) {
    return state.auth.loggedIn;
  },
  loggedUserState(state) {
    return JSON.parse(state.auth.user);
  }
};

export const mutations = {};
