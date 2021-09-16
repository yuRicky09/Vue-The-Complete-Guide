<template>
  <input
    type="text"
    placeholder="請輸入查詢目標"
    v-model.trim="enteredValue"
    @input="$emit('searching', enteredValue)"
  />
</template>

<script>
export default {
  name: 'BaseSerachBar',
  emits: ['searching'],
  data() {
    return {
      enteredValue: ''
    };
  }
};
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
