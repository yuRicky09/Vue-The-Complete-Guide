<template>
  <div>
    <Demo />
    <DemoSec />
  </div>
</template>

<script>
import Demo from "./components/Demo";
import DemoSec from "./components/DemoSec";

export default {
  name: "App",
  components: {
    Demo,
    DemoSec,
  },
};
</script>

<style scoped></style>
