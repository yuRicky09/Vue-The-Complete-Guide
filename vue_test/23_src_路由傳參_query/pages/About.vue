<template>
  <div>
    <h2>歡迎來到關於我們頁面</h2>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted() {
    console.log("About組件已被掛載完畢");
  },
  beforeDestroy() {
    console.log("About組件將要被銷毀");
  },
};
</script>
<style></style>
