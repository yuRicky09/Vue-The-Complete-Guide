<template>
  <div>
    <h2>歡迎來到Home頁面</h2>
    <div class="nav">
      <router-link to="/home/news">News</router-link>
      <router-link to="/home/message">Message</router-link>
    </div>
    <div>
      <router-view class="box"></router-view>
    </div>
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
<style scoped>
.box {
  margin: 10px 20px;
}

.nav a {
  display: inline-block;
  margin: 10px 20px;
}
</style>
