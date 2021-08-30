<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/* 再添加slot標籤的地方，由於具體結構是父層決定的，所以樣式都加scoped的情況也是看父層如何配置。 */
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
