<template>
  <div class="app">
    <h1>我是父組件</h1>
    <h2>父組件的汽車資料{{ name }}---{{ price }}</h2>
    <h2>{{ a }}</h2>
    <Son />
  </div>
</template>

<script>
import { provide, reactive, toRefs, ref } from "vue";
import Son from "./components/Son";

export default {
  name: "App",
  components: { Son },

  setup() {
    const car = reactive({
      name: "特斯拉",
      price: "100W",
    });

    let a = ref(5);

    //! 使用provideAPI提供數據
    provide("carData", car);
    provide("A", a);

    return {
      a,
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: tomato;
  padding: 20px;
}
</style>
