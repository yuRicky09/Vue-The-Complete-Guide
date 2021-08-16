<template>
  <div class="container">
    {{ msg }}
    <br />
    <School></School>
    <br />
    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "自定義事件",
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #aaa;
}
</style>
