<template>
  <div>
    <h1>計算之和為{{ sum }}</h1>
    <select v-model.number="selectedNumber">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addWhenOdd">當為奇數時+</button>
    <button @click="addDelay">等一下再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      selectedNumber: 1,
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.selectedNumber;
      console.log(this);
    },
    decrement() {
      this.sum -= this.selectedNumber;
    },
    addWhenOdd() {
      if (this.sum % 2) {
        this.sum += this.selectedNumber;
      }
    },
    addDelay() {
      setTimeout(() => {
        this.sum += this.selectedNumber;
      }, 1500);
    },
  },
};
</script>

<style></style>
