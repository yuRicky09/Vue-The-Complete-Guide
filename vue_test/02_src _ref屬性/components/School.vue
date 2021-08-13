<template>
  <div class="school">
    {{ name }}
    {{ address }}
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

<style>
.school {
  background-color: blanchedalmond;
  border: 1px solid pink;
}
</style>
