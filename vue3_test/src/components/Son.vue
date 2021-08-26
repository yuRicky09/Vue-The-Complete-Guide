<template>
  <div class="son">
    <h2>我是子組件</h2>
    <h2>{{ b }}</h2>
    <GrandSon />
  </div>
</template>
<script>
import GrandSon from "./GrandSon";

export default {
  name: "Son",
  components: {
    GrandSon,
  },
  setup() {},
};
</script>
<style>
.son {
  background-color: royalblue;
  padding: 20px;
}
</style>
