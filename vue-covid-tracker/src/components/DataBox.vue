<template>
  <div class=" grid md:grid-cols-2 gap-4">
    <!-- Box-1 -->
    <div class=" bg-blue-300 rounded-sm shadow-md text-center p-2">
      <h2 class=" text-3xl text-blue-900 font-bold mb-2">Cases</h2>
      <p class="mb-2 font-bold">
        <span class=" text-2xl">New: </span
        >{{ numberWithCommas(state.NewConfirmed) }}
      </p>
      <p class=" font-bold">
        <span class=" text-2xl">Total: </span
        >{{ numberWithCommas(state.TotalConfirmed) }}
      </p>
    </div>
    <!-- Box 2 -->
    <div class=" bg-blue-300 rounded-sm shadow-md text-center p-2">
      <h2 class=" text-3xl text-blue-900 font-bold mb-2">Deaths</h2>
      <p class="mb-2 font-bold">
        <span class=" text-2xl">New: </span
        >{{ numberWithCommas(state.NewDeaths) }}
      </p>
      <p class=" font-bold">
        <span class=" text-2xl">Total: </span
        >{{ numberWithCommas(state.TotalDeaths) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBox",
  props: ["state"],
  computed: {
    newConfirmed() {
      return this.state.NewConfirmed;
    },
  },
  methods: {
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
