<template>
  <div>
    <button @click="getStudents">點我獲得學生會訊息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      //! axios用法   axios.method('請求網址', 成功時的callback, 失敗時的callback)
      axios.get("http://localhost:8080/api/students").then(
        (res) => {
          //! axios的res為一物件，要獲得真正的內容要用.data屬性
          console.log("請求成功了", res.data);
        },
        (err) => {
          console.log("請求失敗了", err.message);
        }
      );
    },
  },
};
</script>

<style scoped></style>
