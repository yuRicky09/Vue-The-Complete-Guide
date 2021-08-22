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
  mounted() {
    console.log("News路由組件完成掛載");
    // setInterval(() => {
    //   if (this.opacity > 0) {
    //     this.opacity -= 0.05;
    //   } else {
    //     this.opacity = 1;
    //   }
    // }, 100);
  },
  beforeDestroy() {
    console.log("News路由組件將被銷毀");
  },
  activated() {
    console.log(123);
    this.timeID = setInterval(() => {
      if (this.opacity > 0) {
        this.opacity -= 0.05;
      } else {
        this.opacity = 1;
      }
    }, 100);
  },
  deactivated() {
    clearInterval(this.timeID);
  },
};
</script>
<style></style>
