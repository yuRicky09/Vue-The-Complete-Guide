<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: filterMode === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: filterMode === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: filterMode === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: ["filterMode"],
  methods: {
    updateFilter(mode) {
      this.$emit("change-filter", mode);
    },
  },
};
</script>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
