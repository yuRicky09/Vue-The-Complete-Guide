<template>
  <div>
    <h1 :style="{ opacity }">歡迎來到News</h1>
    <ul>
      <li>News01</li>
      <li>News02</li>
      <li>News03</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
};
</script>
<style></style>
