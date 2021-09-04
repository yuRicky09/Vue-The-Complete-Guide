export default {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  //! actions內才允許寫async code
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increseByUserLikely(state, value) {
      state.counter += value;
    }
  },
  getters: {
    MultiplyCounter(state) {
      //! 其實還可以有第二個參數getters，能拿到其他getters計算完後的值
      return state.counter * 10;
    }
  }
};
