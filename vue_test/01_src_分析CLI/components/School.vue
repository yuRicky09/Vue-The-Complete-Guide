<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "新店高中",
      address: "新店",
    };
  },
};
</script>

<style></style>
