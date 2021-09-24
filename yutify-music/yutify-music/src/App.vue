<template>
  <div class="content">
    <the-nav-bar></the-nav-bar>
    <router-view />
  </div>
  <footer class="footer">
    <div>
      <h2>圖片僅作練習，無任何商業用途</h2>
    </div>
  </footer>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";

export default {
  name: "App",
  components: {
    TheNavBar,
  },
};
</script>

<style>
.content {
  margin: 20px auto;
  max-width: 1200px;
  padding: 0 20px;
}
.footer {
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;
}
</style>
