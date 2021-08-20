<template>
  <div>
    <h2>我是home組件</h2>
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home組件已被掛載完畢", this);
  },
  beforeDestroy() {
    console.log("Home組件將要被銷毀");
  },
};
</script>
<style></style>
