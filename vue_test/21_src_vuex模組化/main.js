import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
const vm = new Vue({
  components: {
    App,
  },

  store,

  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
vm.$mount("#app");
