export default {
  namespaced: true,
  actions: {
    addWhenOdd(content, value) {
      if (content.state.sum % 2) {
        content.commit("Increment", value);
      }
    },
    addDelay(content, value) {
      setTimeout(() => {
        content.commit("Increment", value);
      }, 500);
    },
  },
  mutations: {
    Increment(state, value) {
      state.sum += value;
    },
    Decrement(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
  },
  getters: {
    multiplySum(state) {
      return state.sum * 10;
    },
  },
};
