<template>
  <div>
    <h2>這是message{{ $route.query.id }}的編號</h2>
    <h3>這是message的{{ $route.query.title }}</h3>
  </div>
</template>
<script>
export default {
  name: "Detail",
};
</script>
<style></style>
