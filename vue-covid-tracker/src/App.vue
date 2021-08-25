<template>
  <div id="app">
    <HomeHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";

export default {
  name: "App",
  components: {
    HomeHeader,
  },
};
</script>

<style></style>
