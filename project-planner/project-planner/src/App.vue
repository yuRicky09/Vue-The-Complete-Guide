<template>
  <the-navbar></the-navbar>
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: { TheNavbar },
};
</script>

<style>
body {
  background-color: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

button {
  cursor: pointer;
}
</style>
