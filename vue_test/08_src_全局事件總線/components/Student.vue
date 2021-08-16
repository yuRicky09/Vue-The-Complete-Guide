<template>
  <div class="student">
    <h1>姓名: {{ name }}</h1>
    <h1>年齡: {{ age }}</h1>
    <h1>性別: {{ sex }}</h1>
    <br />
  </div>
</template>

<script>
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
    printGetData(data) {
      console.log("我獲得資料了", data);
    },
  },
  mounted() {
    this.$bus.$on("getData", this.printGetData);
  },
};
</script>

<style lang="scss" scoped>
.student {
  background-color: darkcyan;
}
</style>
