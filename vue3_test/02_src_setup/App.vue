<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <br />
    <button @click="showAlert">點我彈窗</button>
  </div>
</template>

<script>
// import { h } from "vue";

export default {
  name: "App",
  //* Vue3中新的配置項，data method直接寫在裡面
  setup() {
    // 數據
    let name = "Yu_Ricky";
    let age = 18;

    // 方法
    const showAlert = function() {
      alert("我跳出來拉");
    };

    //* setup函數的返回值
    //! 1. obj(常用)
    return {
      name,
      age,
      showAlert,
    };

    //! 2. 返回一個渲染函數 (不太會用到)
    // return () => h("h1", "我是渲染函數的返回內容");
  },
};
</script>

<style></style>
