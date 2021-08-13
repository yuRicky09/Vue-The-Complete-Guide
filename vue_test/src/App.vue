<template>
  <div>
    <!-- 記得用v-bind，這樣被綁定的屬性值才會適用JS表達式來判別而非字串 -->
    <Student :age="18" sex="男性"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  components: {
    Student,
  },
};
</script>

<style lang="scss" scoped></style>
