<template>
  <div class="flex items-center flex-col text-3xl font-bold mb-8">
    <h1 class="mb-2">{{ text }}</h1>
    <p class="text-2xl">{{ timestamp }}</p>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "DataTitle",
  props: ["text", "time"],
  computed: {
    timestamp() {
      return moment(this.time).format("MMMM Do YYYY, h:mm:ssa");
    },
  },
};
</script>
<style></style>
