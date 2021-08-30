<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'baseButton',
  props: ['mode']
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

/* 在這些UI組件中 我們除了可以寫些基本樣式外，也可以定義一些特別樣式 然後靠props屬性接受希望的樣式名 */
/* 這樣這個組件的可塑性就更高更方便 */
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
