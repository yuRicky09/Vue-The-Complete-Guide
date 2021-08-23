<template>
  <div>
    <h1>Test組件</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年齡: {{ person.age }}</h2>
    <h2 v-show="person.sex">性別: {{ person.sex }}</h2>
    <button @click="updateSex">點我新增性別</button>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      person: {
        name: "Yu",
        age: 26,
      },
    };
  },
  methods: {
    updateSex() {
      // console.log(this.person.sex);
      // this.person.sex = "男";
      // console.log(this.person.sex);
      this.$set(this.person, "sex", "男");
    },
  },
};
</script>
<style></style>
