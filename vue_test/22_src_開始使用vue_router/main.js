import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);

Vue.config.productionTip = false;
const vm = new Vue({
  components: {
    App,
  },

  router,

  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});
vm.$mount("#app");
