import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vm = new Vue({
  components: {
    App,
  },
  //! 重點就在beforeCreate 我們把全局事件總線再數據代理與模板解析完成前先訂好!
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
});

// 這邊才寫就太慢了 模板已解析完畢才會走到這
// Vue.prototype.x = vm

vm.$mount("#app");
