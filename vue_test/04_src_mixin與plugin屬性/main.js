import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import plugins from "./plugins";

Vue.use(plugins);

const vm = new Vue({
  components: {
    App,
  },

  render: (h) => h(App),
});

vm.$mount("#app");
