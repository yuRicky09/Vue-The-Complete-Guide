<template>
  <div>
    <!-- 這邊寫結構  -->
    <h1>學校名:{{ name }}</h1>
    <h1>學校地址:{{ address }}</h1>
  </div>
</template>

<script>
// 這邊寫交互
//! 在創建組件時Vue.extend其實是可省略只要寫物件配置就好，Vue會在背後幫我們用
// const School = Vue.extend({
//   data() {
//     return {
//       name: "新店高中",
//       address: "新店",
//     };
//   },
// });

//* 精簡寫法
export default {
  data() {
    return {
      name: "新店高中",
      address: "新店",
    };
  },
};
</script>

<style>
/* 這邊寫樣式 */
</style>
