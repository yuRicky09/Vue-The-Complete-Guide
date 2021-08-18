import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vm = new Vue({
  components: {
    App,
  },

  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
vm.$mount("#app");
