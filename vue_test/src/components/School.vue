<template>
  <div class="school">
    <h1>
      {{ name }}
    </h1>
    <h1>
      {{ address }}
    </h1>
    <button @click="sayHello">點我使用sayHello Fn</button>
  </div>
</template>

<script>
// import sayHello from "../mixin";

export default {
  name: "School",
  data() {
    return {
      name: "新店高中",
      address: "新店",
    };
  },
  // mixins: [sayHello],
};
</script>

<style lang="scss" scoped>
.school {
  background-color: pink;
}
</style>
