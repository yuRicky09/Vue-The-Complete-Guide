<template>
  <div>
    <h2>這是message{{ id }}的編號</h2>
    <h3>這是message的{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: "Detail",
  // 使用路由的props屬性接收參數，簡化$route......這種寫法
  props: ["id", "title"],
};
</script>
<style></style>
