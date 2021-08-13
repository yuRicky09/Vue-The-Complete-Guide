import sayHello from "./mixin";

export default {
  install(Vue) {
    Vue.mixin(sayHello);

    Vue.prototype.showMyName = () => {
      alert("My name is Yu!");
    };
  },
};
