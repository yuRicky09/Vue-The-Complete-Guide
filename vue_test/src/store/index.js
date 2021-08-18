import Vue from "vue";
import Vuex from "vuex";

// 使用Vuex插鍵
Vue.use(Vuex);

// 準備一個actions 用於響應組件的動作
const actions = {};

// 準備一個mutations 用於操作數據
const mutations = {};

// 準備一個state 用於存儲數據
const state = {};

// 創建store 並輸出
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
