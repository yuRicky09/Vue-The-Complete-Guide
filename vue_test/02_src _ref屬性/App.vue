<template>
  <div>
    <h1 ref="title">歡迎來到新店高中</h1>
    <button @click="getDOM" ref="btn">點我獲取DOM元素</button>
    <School ref="School"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  components: {
    School,
  },
  methods: {
    getDOM() {
      console.log(this.$refs);
    },
  },
};
</script>

<style lang="scss" scoped></style>
