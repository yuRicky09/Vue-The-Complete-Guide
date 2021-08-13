<template>
  <div>
    <Student></Student>
    <br />
    <School></School>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
console.log(Student);
console.log(School);
export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style></style>
