<template>
  <div class=" flex flex-col items-center justify-center mt-5">
    <select
      v-model="selectedValue"
      @change="changeSelectCountry"
      class="p-2 w-full shadow-md border-2 border-gray-500"
    >
      <option value="0">Please Select Country</option>
      <option
        :value="country.Country"
        v-for="country in countries"
        :key="country.Country"
        >{{ country.Country }}</option
      >
    </select>
    <transition name="clear-btn">
      <button
        v-if="selectedValue !== '0'"
        class=" bg-red-600 p-2 rounded mt-4 text-white hover:bg-red-400"
        @click="clearCountry"
      >
        Clear Country
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    return {
      selectedValue: "0",
    };
  },
  methods: {
    changeSelectCountry() {
      if (this.selectedValue === "0") return;
      this.$bus.$emit("getSelectedCountry", this.selectedValue);
    },
    clearCountry() {
      this.selectedValue = "0";
      this.$bus.$emit("resetData");
    },
  },
};
</script>

<style scoped>
.clear-btn-enter-active {
  animation: showup 0.5s linear;
}

.clear-btn-leave-active {
  animation: showup 0.5s linear reverse;
}

@keyframes showup {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
