<template>
  <div>
    <h1>姓名: {{ name }}</h1>
    <h1>年齡: {{ age }}</h1>
    <h1>性別: {{ sex }}</h1>
    <button @click="showThis">點我使用sayHello Fn</button>
    <button @click="showMyName">點我使用Vue原型鍊上showMyname方法</button>
  </div>
</template>

<script>
// import sayHello from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "Yu",
      age: 18,
      sex: "男性",
    };
  },
  methods: {
    showThis() {
      console.log(this);
    },
  },
  // mixins: [sayHello],
};
</script>

<style lang="scss" scoped></style>
