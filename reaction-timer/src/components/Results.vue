<template>
  <base-card class="resultBox">
    <h1>{{ gameScoreResult }}</h1>
    <h2>共耗時:{{ time }} 毫秒</h2>
  </base-card>
</template>
<script>
export default {
  name: "Results",
  props: ["time"],
  computed: {
    gameScoreResult() {
      if (this.time < 500) {
        return "太神拉 超快的!";
      } else if (this.time < 2000) {
        return "還行拉 平凡人水準";
      } else {
        return "靠可以再慢點沒關係";
      }
    },
  },
  mounted() {
    console.log("Result模板掛載完畢");
  },
  unmounted() {
    console.log("Result模板卸載完畢");
  },
};
</script>
<style scoped>
.resultBox {
  flex-direction: column;
}
</style>
