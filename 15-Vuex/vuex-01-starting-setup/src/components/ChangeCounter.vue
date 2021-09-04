<template>
  <section>
    <label for="addBy">請選擇當前和一次要加的數字</label>
    <select
      name=""
      id="addBy"
      v-model.number="selectedNumber"
      :value="selectedNumber"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <p>當前合為:{{ counter }}</p>
    <button @click="increseByUserLikely(selectedNumber)">
      為和添加{{ selectedNumber }}
    </button>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ChangeCounter',
  data() {
    return {
      selectedNumber: 1
    };
  },
  methods: {
    // addCounter() {
    //   this.$store.commit('increseByUserLikely', this.selectedNumber);
    // },
    ...mapMutations('counterModule', ['increseByUserLikely'])
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // }
    ...mapState('counterModule', ['counter'])
  }
};
</script>

<style></style>
