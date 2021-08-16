<template>
  <div class="school">
    <h1>
      {{ name }}
    </h1>
    <h1>
      {{ address }}
    </h1>
    <br />
    <button @click="sendSchoolName">點我傳送學校姓名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "新店高中",
      address: "新店",
    };
  },
  methods: {
    sendSchoolName() {
      this.$bus.$emit("getData", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.school {
  background-color: pink;
}
</style>
