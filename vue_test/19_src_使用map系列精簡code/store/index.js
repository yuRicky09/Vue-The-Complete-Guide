import Vue from "vue";
import Vuex from "vuex";

// 使用Vuex插鍵
Vue.use(Vuex);

// 準備一個actions 用於響應組件的動作
const actions = {
  //! 第一個參數慣例會叫content，這是因為這個參數是藉由判斷上下文後給你一個obj，裡面有你可能會需要用到的屬性 方法。  content:有上下文之意
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
};

// 準備一個mutations 用於操作數據
const mutations = {
  // 第一個參數為state，供mutations去加工
  Increment(state, value) {
    state.sum += value;
  },
  Decrement(state, value) {
    state.sum -= value;
  },
};

// 準備一個state 用於存儲數據
const state = {
  sum: 0,
};

const getters = {
  multiplySum(state) {
    return state.sum * 10;
  },
};

// 創建store 並輸出
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
