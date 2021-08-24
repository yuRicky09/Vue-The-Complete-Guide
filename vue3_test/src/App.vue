<template>
  <div>
    <h1>{{ person.name }}</h1>
    <h1>{{ person.teamNumber.laker }}</h1>
    <br />
    <button @click="showAlert">點我彈窗</button>
    <button @click="changeInfo">點我更改資料</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 數據
    const person = reactive({
      name: "LeBron",
      sex: "男",
      position: ["SF", "PG", "PF", "C"],
      teamNumber: {
        laker: 23,
        heat: 6,
        cavs: 23,
      },
    });

    // 方法
    const showAlert = function() {
      alert("我跳出來拉");
    };

    const changeInfo = function() {
      person.name = "LeBron James";
      person.teamNumber.laker = 6;
    };

    return {
      showAlert,
      changeInfo,
      person,
    };
  },
};
</script>

<style></style>
