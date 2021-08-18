<template>
  <div>
    <slot :listData="foods"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      foods: ["pizza", "beefnoodles", "steak"],
    };
  },
};
</script>
<style></style>
