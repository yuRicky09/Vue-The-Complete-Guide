export default {
  namespaced: true,
  state() {
    return { isLogin: false };
  },
  actions: {},
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  getters: {}
};
