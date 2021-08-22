<template>
  <div>
    <h1>Vue Router Demo</h1>
    <button @click="backTo">上一頁</button>
    <button @click="forwardTo">下一頁</button>
    <button @click="goTo">跳轉幾頁(看設定)</button>
  </div>
</template>
<script>
export default {
  name: "Banner",
  methods: {
    backTo() {
      this.$router.back();
    },
    forwardTo() {
      this.$router.forward();
    },
    goTo() {
      this.$router.go(2);
    },
  },
};
</script>
<style></style>
