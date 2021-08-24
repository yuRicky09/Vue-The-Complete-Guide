<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <br />
    <button @click="showAlert">點我彈窗</button>
    <button @click="changeInfo">點我更改資料</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  //* Vue3中新的配置項，data method直接寫在裡面
  setup() {
    // 使用ref函數定義一個響應式數據
    // 數據
    let name = ref("Yu_Ricky");
    let age = ref(18);
    let person = ref({
      name: "Yu",
      age: 18,
      sex: "男",
    });

    // 方法
    const showAlert = function() {
      alert("我跳出來拉");
    };

    const changeInfo = function() {
      name.value = "Lebron";
      age.value = 36;
      console.log(peorson.value);
    };

    //* setup函數的返回值
    //! 1. obj(常用)
    return {
      name,
      age,
      showAlert,
      changeInfo,
      person,
    };

    //! 2. 返回一個渲染函數 (不太會用到)
    // return () => h("h1", "我是渲染函數的返回內容");
  },
};
</script>

<style></style>
